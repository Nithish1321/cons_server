const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product should have a name"],
    unique: true,
    validate: [validator.isAlpha, "Product name contains only characters"],
  },
  description: {
    type: String,
    required: [true, "Product should have a description"],
    validate: [validator.isAlpha, "Product name contains only characters"],
  },
  price: {
    type: Number,
    required: [true, "Product should have a price"],
    validate: [validator.isNumeric, "Product name contains only characters"],
  },
});

const Product = mongoose.model('Product',productSchema)