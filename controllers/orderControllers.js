const orderModel = require("../models/orderModel");
const asyncWrapper = require("../middelwares/asyncWrapper");

const newOrderController = asyncWrapper(async (req, res) => {
  const order = await orderModel.create(req.body);
  res.json({ status: "success", data: order });
});

const getAllOredersController = asyncWrapper(async (req, res) => {
  const orders = await orderModel.find().populate({
    path: "products.product",
    model: "product",
  });
  res.json({ status: "success", data: orders });
});

const getUserOrders = asyncWrapper(async (req, res) => {
  const orders = await orderModel.find({ user: req.headers._id }).populate({
    path: "products.product",
    model: "product",
  });
  res.json({ status: "success", data: orders });
});

const getOneOrder = asyncWrapper(async (req, res) => {
    const order = await orderModel.findById(req.params.id).populate({
      path: "products.product",
      model: "product",
    }).populate('user');
    res.json({ status: "success", data: order });
  });

const updateOrder = asyncWrapper(async (req, res) => {
  const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.json({ status: "success", data: order });
});


const deleteOrder = asyncWrapper(async (req, res) => {
    const order = await orderModel.findByIdAndDelete(req.params.id);
    res.json({ status: "success", data: order });
  });
  

module.exports = {
  newOrderController,
  getAllOredersController,
  getUserOrders,
  updateOrder,
  deleteOrder,
  getOneOrder
  
};
