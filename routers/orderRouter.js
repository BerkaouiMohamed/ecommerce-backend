const { getAllOredersController, newOrderController } = require('../controllers/orderControllers');

const orderRouter=require('express').Router()



//get all products
orderRouter.get("/",getAllOredersController );

//add new product
orderRouter.post("/",newOrderController);

module.exports=orderRouter