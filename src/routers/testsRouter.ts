import { Router } from "express";
import testsController from "../controllers/testsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import testSchema from "../schemas/testSchema.js";
const testsRouter = Router();

testsRouter.post(
  "/tests",
  validateSchemaMiddleware(testSchema.TestSchema),
  testsController.CreateTest
);
testsRouter.get("/tests/terms", testsController.FindGroupByTermsAndDisciplines);
testsRouter.get("/tests/teachers", testsController.FindGroupByTeacher);

export default testsRouter;
