const userRouter = require("express").Router();
const {
  getAllUsersController,
  getOneUserController,
  deleteUserController,
} = require("../controllers/userControllers");

//get all users
userRouter.get("/", getAllUsersController);
//get one user
userRouter.get("/:id", getOneUserController);
//delete user
userRouter.delete("/:id", deleteUserController);

module.exports = userRouter;
