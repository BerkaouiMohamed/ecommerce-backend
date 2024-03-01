const { getAllOredersController, newOrderController, getUserOrders, updateOrder, deleteOrder, getOneOrder } = require('../controllers/orderControllers');
const verifytoken = require('../middelwares/verfiyToken');
const isAdmin = require('../middelwares/verifyAdmin');

const orderRouter=require('express').Router()



//get all products
orderRouter.get("/",verifytoken,isAdmin,getAllOredersController );
orderRouter.get("/user",verifytoken ,getUserOrders );
orderRouter.get("/:id",verifytoken,isAdmin ,getOneOrder );

orderRouter.put("/:id",verifytoken ,isAdmin,updateOrder );
orderRouter.delete("/:id",verifytoken ,isAdmin,deleteOrder );

orderRouter.post("/",verifytoken,newOrderController);


//add new product

module.exports=orderRouter