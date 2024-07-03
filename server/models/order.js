const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
   user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
   cart:{type:mongoose.Schema.Types.ObjectId,ref:"cart"},
   

},{timestamp:true})

module.exports=mongoose.model('order',orderSchema);