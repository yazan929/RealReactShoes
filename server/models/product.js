const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});






const Product = mongoose.model("product", productSchema);

module.exports = Product;