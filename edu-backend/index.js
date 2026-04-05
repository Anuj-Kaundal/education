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
const dotenv = require('dotenv').config();

app.use(cors({ origin: process.env.FRONTEND_URL })); 
app.use(express.urlencoded({extended:true}));
app.use(express.json())

const PORT = process.env.PORT;
console.log("PORT: ", process.env.PORT)
app.get("/", (req,res)=>{
  res.send("api is up and running")
})
// register user data
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword
    });

    res.json({
      success: true,
      message: "User registered",
      user
    });

  } catch (error) {
    res.json({
      success: false,
      message: "Error"
    });
  }
});
 // login api
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // 2. check user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // 3. password compare (IMPORTANT 🔥)
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // 4. success
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});
✅ 2. Register (IMP

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
    console.log(contactus,'all done');
})
app.listen(PORT,()=>{
    console.log('backend is running successfully');
});