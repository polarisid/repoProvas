import { Router } from "express";
import userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import userSchema from "../schemas/userSchema.js";
const userRouter = Router();

userRouter.post(
  "/users/signup",
  validateSchemaMiddleware(userSchema.UserSchema),
  userController.Signup
);

userRouter.post(
  "/users/signin",
  validateSchemaMiddleware(userSchema.UserSchema),
  userController.Signin
);

export default userRouter;
