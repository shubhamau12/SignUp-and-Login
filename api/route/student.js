const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
router.get('/',(req,res,next)=>{
    console.log(req.body);
   
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
      msg:"this is student post request"
    })
   
})



module.exports = router;