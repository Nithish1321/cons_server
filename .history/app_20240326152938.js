const express = require("express");
const app = express();
const productRouter = require('./routes/productRoute.route')
app.use(express.json());

app.use((req, res, next) => {
  console.log("reqqq");
  next();
});

app.use('/',productRouter)

module.exports = app;
