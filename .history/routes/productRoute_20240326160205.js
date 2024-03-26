const express = require("express");
const router = express.Router();
const productContoller = require("../controller/productContoller");
router.route("/").post(productContoller.addProduct);

module.exports = router;
