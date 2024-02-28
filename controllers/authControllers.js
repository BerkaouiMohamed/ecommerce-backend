const { validationResult } = require("express-validator");
const asyncWrapper = require("../middelwares/asyncWrapper");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
//register 
const registerController = asyncWrapper(async (req, res, next) => {
  const validator = validationResult(req);
  if (!validator.isEmpty()) {
    return next("validation error");
  }

  const user = {
    ...req.body,
    password: await bcrypt.hash(req.body.password, 10),
  };
  const newUser = await userModel.create(user);
  res.json({ status: "success", data: newUser });
});

//_________________________________________________________________________
const loginController = asyncWrapper(async (req, res, next) => {
  const validator = validationResult(req);
  if (!validator.isEmpty()) {
    return next("validation error");
  }
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return next("user not found");
  }
  const result = await bcrypt.compare(req.body.password, user.password);
  if (!result) {
    return next("email or password are wrong");
  }

  const token = jwt.sign({ id: user._id,role:user.isAdmin?"admin":"user" }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ status: "success", data: {_id:user._id ,token:token,role:user.isAdmin?"admin":"user"} });
});
//________________________________________________________________________
module.exports = {
  registerController,
  loginController,
};
