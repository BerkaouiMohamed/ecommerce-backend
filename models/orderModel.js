const mongoose=require('mongoose')


const orderSchema=new mongoose.Schema({
   user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'user'
   },
   products:[{
       product:{
           type:mongoose.Schema.Types.ObjectId,
           ref:'product'
       },
       quantity:Number,
       _id:false
   }],
   total:Number,
   status:{type:String,default:'pending',enum:['pending','completed','cancelled']},

},{timestamps:true})

const orderModel=mongoose.model('order',orderSchema)
module.exports=orderModel