const mongoose = require("mongoose");
function generateRandomOrderId() {
  return Math.floor(1000 + Math.random() * 9000);
}
const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    default: generateRandomOrderId,
    required: true,
    unique: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  billAmount: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
