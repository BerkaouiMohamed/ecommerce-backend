const { validationResult } = require("express-validator");
const userVerification = require("../middelwares/userVarification");
const asyncWrapper = require("../middelwares/asyncWrapper");
const userModel = require("../models/userModel");
require("dotenv").config();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerController, loginController } = require("../controllers/authControllers");

const authRouter = require("express").Router();

authRouter.post("/register", userVerification(), registerController);

authRouter.post("/login", userVerification(),loginController);
module.exports = authRouter;
