import { Router } from "express";
import defaultRouter from "./defaultRouter.js";
import userRouter from "./userRouter.js";
const router = Router();

router.use(userRouter);

export default router;
