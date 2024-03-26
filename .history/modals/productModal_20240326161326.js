const mongoose = require("mongoose");
const slugify = require("slugify");


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product should have a name"],
    unique: true,
    
  },
  description: {
    type: String,
    required: [true, "Product should have a description"],
  },
  price: {
    type: Number,
    required: [true, "Product should have a price"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;