const express = require("express");
const router = express.Router();
const authContoller = require("../controller/authController");
const userController = require("../controller/cartContoller");
const cartContoller = require("../controller/cartContoller")
router.route("/signup").post(authContoller.signup);
router.route("/signin").post(authContoller.signin);
router.route("/cart/:userId").get(cartContoller.fetchCartData);
router.route("/cart/:userId").put(cartContoller.sendCartData);
// router.route("/:userId/cart/add/:itemId").patch(userController.addExistingItem);

module.exports = router;
