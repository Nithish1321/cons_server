const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.reqTime = new Date().toISOString();
    console.log(req.headers);
    next();
  });