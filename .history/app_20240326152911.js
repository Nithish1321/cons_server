const express = require("express");
const app = express();
const pro
app.use(express.json());

app.use((req, res, next) => {
  console.log("reqqq");
  next();
});

app.use('/',)

module.exports = app;
