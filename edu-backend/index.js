const express = require('express');
const app = express();
const data  = require('./model/user');
const cors = require('cors');
const bcrypt = require('bcrypt');
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