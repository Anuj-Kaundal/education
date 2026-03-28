const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.lookup('google.com', (err, address, family) => {
  console.log(address);
});


const express = require('express');
const app = express();
const data  = require('./model/user');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cors('http://localhost:5173/'));
app.use(express.urlencoded({extented:true}));
app.use(express.json())
// register user data
app.post('/register',async (req,res)=>{
    const {firstname,lastname,email,password} = req.body;
    // console.log(firstname,lastname,email,password);
    const hashpass =await bcrypt.hash(password, 2);
    const adddata = await data.create({
        firstname,
        lastname,
        email,
        password:hashpass
    });
    console.log(adddata,'all done');
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // 2. Check user exists
    const user = await  data.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    // 4. Generate JWT token
    const token = jwt.sign(
      { email: user.email },
      "secretkey123", // use env variable in real project
      { expiresIn: "1h" }
    );

    // 5. Send response
    return res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error in login API",
      error: error.message
    });
  }
});

// contact us
app.post('/contact',async(req,res)=>{
    const{fullname,email,subject,message} = req.body;
    console.log(fullname,email,subject,message);
    const contactus = await data.create({
        fullname,
        email,
        subject,
        message
    });
    console.log(adddata,'all done');
})
app.listen(2000,()=>{
    console.log('backend is running successfully');
});