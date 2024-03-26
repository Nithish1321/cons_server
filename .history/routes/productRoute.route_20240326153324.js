const express = require("express");
const router = express.Router();

const router.route("products").get((req, res, next) => {
  res.status(200).json({
    status: "succes",
  });
  next();
});

module.exports = 