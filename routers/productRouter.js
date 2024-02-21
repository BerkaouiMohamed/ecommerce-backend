const {
  getAllProductsController,
  deletedProductController,
  updateProductController,
  addNewProductController,
} = require("../controllers/productCotrollers");
const productVerification = require("../middelwares/productVerification");
const productRouter = require("express").Router();

//get all products
productRouter.get("/", getAllProductsController);

//add new product
productRouter.post("/", productVerification(), addNewProductController);

//delete product
productRouter.delete("/:id", deletedProductController);
//update product
productRouter.put("/:id", updateProductController);

module.exports = productRouter;
