const express = require("express");
const router = express.Router();
const authContoller = require("../controller/authController");
router.route("/signup").post(authContoller.signup);
router.route("/signin")
module.exports = router;
