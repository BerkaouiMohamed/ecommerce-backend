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
const multer=require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    if(file)
    cb(null, 'hello' + '-' + Date.now()+`.${file.mimetype.split('/')[1]}`)
  else{
    cb('error',null)
  }
  }
})

const upload = multer({ storage })


//get all products
productRouter.get("/",  getAllProductsController);

//add new product
productRouter.post("/",upload.single('image'), productVerification(),verifytoken,isAdmin, addNewProductController);

//delete product
productRouter.delete("/:id",verifytoken,isAdmin, deletedProductController);
//update product
productRouter.put("/:id",verifytoken,isAdmin, updateProductController);

module.exports = productRouter;


