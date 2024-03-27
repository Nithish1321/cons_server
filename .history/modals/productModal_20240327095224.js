const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  _id: {
    type: mongoose.Schema.Types.ObjectId, // specifying the type as ObjectId
    auto: true, // enabling auto generation of the ObjectId
  },
  name: {
    type: String,
    required: [true, "Product should have a name"],
  },
  description: {
    type: String,
    required: [true, "Product should have a description"],
  },
  price: {
    type: Number,
    required: [true, "Product should have a price"],
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
