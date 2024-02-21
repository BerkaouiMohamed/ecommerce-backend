const asyncWrapper = require("../middelwares/asyncWrapper");
const userModel = require("../models/userModel");

const getAllUsersController = asyncWrapper(async (req, res) => {
  const users = await userModel.find();
  res.json({ status: "success", data: users });
});
//________________________________________
const getOneUserController = asyncWrapper(async (req, res) => {
  const user = await userModel.findById(req.params.id);
  res.json({ status: "success", data: user });
});
//________________________________________
const deleteUserController = asyncWrapper(async (req, res) => {
  const users = await userModel.findByIdAndDelete(req.params.id);
  res.json({ status: "success", data: users });
});
module.exports = {
  getAllUsersController,
  getOneUserController,
  deleteUserController,
};
