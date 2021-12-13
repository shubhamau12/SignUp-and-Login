const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoute= require('./api/route/user');
//mongoose.connect('mongodb+srv://shubh911:10011@nshU@shubh1.wkyh0.mongodb.net/shubh1?retryWrites=true&w=majority');
mongoose.connect("mongodb://localhost:27017/shubhInf");
mongoose.connection.on('error',err =>{
    console.log("connection failed");
})

mongoose.connection.on('connected', connected=>{
    console.log("Connection Successful");
})

app.use('/user',userRoute);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const studentRoute= require('./api/route/student');
const facultyRoute = require('./api/route/faculty');
app.use('/student',studentRoute);
app.use('/faculty',facultyRoute);
app.use((req, res, next)=>{
        res.status(404).json({
        error:'Bad URL request'
    });
} ) 

module.exports = app;