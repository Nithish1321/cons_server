const express = require("express");
const router = express.Router();
const authContoller = require("../controller/authController");
const userController = require("../controller/userContoller");
const cartContoller = require("../controller/cartContoller");
const ordersController = require("../controller/ordersController");

router.route("/signup").post(authContoller.signup);
router.route("/signin").post(authContoller.signin);
router.route("/:userId").patch(userController.changeUserAddress);
router.route("/cart/:userId").get(cartContoller.fetchCartData);
router.route("/cart/:userId").put(cartContoller.sendCartData);
router.route("/cart/:userId").delete(cartContoller.deleteCartData);
router.route("/orders").post(ordersController.createOrder);
router.route("/orders/validate").post(ordersController.validateOrder);
module.exports = router;
