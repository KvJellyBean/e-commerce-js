const { Schema, model } = require("mongoose");

const purchaseHistorySchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

module.exports = model("purchaseHistory", purchaseHistorySchema);