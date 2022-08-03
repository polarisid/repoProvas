import Joi from "joi";
import { testReceivedType } from "../types/testsTypes.js";

const TestSchema = Joi.object<testReceivedType>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().required(),
  categoryId: Joi.number().required(),
  disciplineId: Joi.number().required(),
  teacherId: Joi.number().required(),
});

export default { TestSchema };
