const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "name is mandatory"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  });
  exports.Product = mongoose.model("Product", productSchema);