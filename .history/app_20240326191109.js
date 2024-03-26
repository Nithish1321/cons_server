const express = require("express");
const app = express();
const productRouter = require('./routes/productRoute')
app.use(express.json());

app.use((req, res, next) => {
  console.log("reqqq");
  next();
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/api/v1/products',productRouter);

module.exports = app;
