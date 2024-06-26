const { Schema, model } = require("mongoose");

// Mongoose schema for product.
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  quantity: {
    type: Number,
    min: 1,
    default: 1,
  },
});

module.exports = model("product", productSchema);
