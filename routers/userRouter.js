const userRouter = require("express").Router();
const {
  getAllUsersController,
  getOneUserController,
  deleteUserController,
} = require("../controllers/userControllers");
const verifytoken = require("../middelwares/verfiyToken");
const isAdmin = require("../middelwares/verifyAdmin");

//get all users
userRouter.get("/",verifytoken,isAdmin, getAllUsersController);
//get one user
userRouter.get("/:id",verifytoken,isAdmin,  getOneUserController);
//delete user
userRouter.delete("/:id",verifytoken,isAdmin, deleteUserController);

module.exports = userRouter;
