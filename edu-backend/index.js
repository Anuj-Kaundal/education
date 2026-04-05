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
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 2. Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Wrong password"
      });
    }

    // 4. Success
    return res.status(200).json({
      success: true,
      message: "Login successful"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
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