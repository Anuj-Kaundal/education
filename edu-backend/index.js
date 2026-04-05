const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.lookup('google.com', (err, address, family) => {
  console.log(address);
});


const express = require('express');
const app = express();
const data = require('./model/user');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const PORT = process.env.PORT;
console.log("PORT: ", process.env.PORT)
app.get("/", (req, res) => {
  res.send("api is up and running")
})
// register user data
app.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    // console.log(firstname,lastname,email,password);
    const hashpass = await bcrypt.hash(password, 2);
    const adddata = await data.create({
      firstname,
      lastname,
      email,
      password: hashpass
    });
    console.log(adddata, 'all done');
    res.status(200).json({ "message": "User register successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" }, error);
  }
});
// login api
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await data.findOne({ email });
    if (!user) return res.json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: 'Wrong password' });

    const token = jwt.sign({ id: user._id }, 'secret');

    res.json({ message: 'Login success', token });
});

// contact us
app.post('/contact', async (req, res) => {
  const { fullname, email, subject, message } = req.body;
  console.log(fullname, email, subject, message);
  const contactus = await data.create({
    fullname,
    email,
    subject,
    message
  });
  console.log(contactus, 'all done');
})
app.listen(PORT, () => {
  console.log('backend is running successfully');
});