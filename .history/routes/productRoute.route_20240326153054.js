const express = require('express');
const router=  express.Router();

router.get('products',(req,res,next)=>{
    console.log('sfbeth')
    next();
})