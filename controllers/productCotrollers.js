const { validationResult } = require("express-validator");
const asyncWrapper = require("../middelwares/asyncWrapper");
const productModel = require("../models/productModel");

const getAllProductsController = asyncWrapper(async (req, res) => {

  if (req.query) {
    const products = await productModel.find().limit(req.query.limit);
    res.json({ status: "success", data: products });
  } else {
    const allproducts = await productModel.find();
    res.json({ status: "success", data: allproducts });
  }

});
//_________________________________________
const addNewProductController = asyncWrapper(async (req, res, next) => {
  const validator = validationResult(req);
  if (!validator.isEmpty()) {
    return next("validation error");
  }
  const product = req.body;
  const newProduct = await productModel.create(product);
  res.json({ status: "success", data: newProduct });
});
//____________________________________________
const deletedProductController = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await productModel.findByIdAndDelete(id);
  res.json({ status: "success", data: deletedProduct });
});
//______________________________________________
const updateProductController = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await productModel.findByIdAndUpdate(id, req.body);
  res.json({ status: "success", data: updatedProduct });
});

module.exports = {
  getAllProductsController,
  addNewProductController,
  deletedProductController,
  updateProductController,
};
