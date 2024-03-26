const express = require('express');
const router=  express.Router();

router.('products',(req,res,next)=>{
    res.status(200).json({
        status:'succes'
    });
    next();
})