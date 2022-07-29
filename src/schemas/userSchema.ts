import Joi from "joi";
import { userType } from "../types/userTypes.js";

const UserSchema = Joi.object<userType>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default { UserSchema };
