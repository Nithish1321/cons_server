const express = require("express");
const router = express.Router();
const productContoller = require("../controller/productContoller");
router.route('/').get(productContoller.get).post(productContoller.addProduct);

module.exports = router;
