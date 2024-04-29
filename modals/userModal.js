const mongoose = require("mongoose");

// const cartItemSchema = new mongoose.Schema({
//   id: String,
//   price: Number,
//   quantity: Number,
//   totalPrice: Number,
//   productName: String,
// });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: [true, "Please provide your phone number"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  address: {
    type: String,
    required: [true, "Please provide a address"],
  },
  city: {
    type: String,
    required: [true, "Please provide a city"],
  },
  pincode: {
    type: Number,
    required: [true, "Please provide a pincode"],
  },
  // cart: {
  //   items: [cartItemSchema],
  //   totalQuantity: {
  //     type: Number,
  //     default: 0,
  //   },
  // },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
