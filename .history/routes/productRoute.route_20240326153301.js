const express = require("express");
const router = express.Router();

router.route("products").get((req, res, next) => {
  res.status(200).json({
    status: "succes",
  });
  next();
});
