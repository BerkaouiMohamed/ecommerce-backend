const orderModel = require("../models/orderModel")
const asyncWrapper=require('../middelwares/asyncWrapper')

const newOrderController=asyncWrapper(async (req,res)=>
{
    
    const order=await orderModel.create(req.body)
    res.json({status:'success',data:order})
})

const getAllOredersController=asyncWrapper(async (req,res)=>{


        const orders=await orderModel.find().populate({
            path:'products.product',
            model:"product"})
        res.json({status:"success",data:orders})}
     


)

const getUserOrders=asyncWrapper(async (req,res)=>{


    const orders=await orderModel.find({user:req.headers._id}).populate({
        path:'products.product',
        model:"product"})
    res.json({status:"success",data:orders})}
 


)


module.exports={
    newOrderController,
    getAllOredersController,
    getUserOrders
}