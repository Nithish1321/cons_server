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
  
});
