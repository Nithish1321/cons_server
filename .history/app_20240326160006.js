const express = require("express");
const app = express();
const productRouter = require('./routes/productRoute')
app.use(express.json());

app.use((req, res, next) => {
  console.log("reqqq");
  next();
});

app.use('/products',productRouter);

module.exports = app;
