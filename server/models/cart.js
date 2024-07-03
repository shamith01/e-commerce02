const mongoose = require("mongoose");

const cartProduct=mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId, ref:"product"},
    qty:{type:Number},
    price:{type:Number}
})

const cartSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref:"user" },
    cartItems:[cartProduct],
    totalAmount:{
        type:Number,
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("cart", cartSchema);
