const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
    },
    code: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    }
  },
  {
    timestamp: true
  }
)

module.exports = mongoose.model('Product', ProductSchema)
