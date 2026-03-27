const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/edu').then(()=>{
    console.log('database is connected')
});
const createData = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    fullname:String,
    email:String,
    subject:String,
    message:String
});
module.exports = mongoose.model('user', createData);