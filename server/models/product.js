const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    stock:{
        type:Number,
    },
    picture:[{img:{type:String}}],

},{timestamp:true})

module.exports=mongoose.model('product',productSchema);