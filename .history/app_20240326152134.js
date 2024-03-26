const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("");
  next();
});

module.exports = app;
