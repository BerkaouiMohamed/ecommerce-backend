const { getAllOredersController, newOrderController, getUserOrders } = require('../controllers/orderControllers');
const verifytoken = require('../middelwares/verfiyToken');
const isAdmin = require('../middelwares/verifyAdmin');

const orderRouter=require('express').Router()



//get all products
orderRouter.get("/",verifytoken,isAdmin,getAllOredersController );
orderRouter.get("/user",verifytoken ,getUserOrders );


//add new product
orderRouter.post("/",newOrderController);

module.exports=orderRouter