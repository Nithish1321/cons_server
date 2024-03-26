const express = require('express');
const app = express();
app.use((req, res, next) => {
    req.reqTime = new Date().toISOString();
    console.log(req.headers);
    next();
  });