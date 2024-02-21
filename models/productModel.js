const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String},
    image:{type:String},

},{timestamps:true})

const productModel=mongoose.model('product',productSchema)
module.exports=productModel