const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    UserName:String,
    password:String,
    email:String,
    phone:Number,
    userType:String
})

module.exports = mongoose.model('User',userSchema);