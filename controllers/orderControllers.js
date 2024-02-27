const orderModel = require("../models/orderModel")
const asyncWrapper=require('../middelwares/asyncWrapper')

const newOrderController=asyncWrapper(async (req,res)=>
{
    
    const order=await orderModel.create(req.body)
    res.json({status:'success',data:order})
})

const getAllOredersController=asyncWrapper(async (req,res)=>{


        const orders=await orderModel.find()
        res.json({status:"success",data:orders})
}

)
module.exports={
    newOrderController,
    getAllOredersController
}