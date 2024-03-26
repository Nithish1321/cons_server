const express = require('express');
const router=  express.Router();

router.get('products',(req,res,next)=>{
    res.status(200);
    next();
})