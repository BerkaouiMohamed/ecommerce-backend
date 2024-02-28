const {
  getAllProductsController,
  deletedProductController,
  updateProductController,
  addNewProductController,
} = require("../controllers/productCotrollers");
const productVerification = require("../middelwares/productVerification");
const productRouter = require("express").Router();
const jwt=require('jsonwebtoken');
const verifytoken = require("../middelwares/verfiyToken");
const isAdmin = require("../middelwares/verifyAdmin");
require("dotenv").config()





//get all products
productRouter.get("/",  getAllProductsController);

//add new product
productRouter.post("/", productVerification(),verifytoken,isAdmin, addNewProductController);

//delete product
productRouter.delete("/:id",verifytoken,isAdmin, deletedProductController);
//update product
productRouter.put("/:id",verifytoken,isAdmin, updateProductController);

module.exports = productRouter;


