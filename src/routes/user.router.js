const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");

userRouter.post("/signup", userController.signup);

module.exports = { userRouter };
