import { userType } from "../types/userTypes.js";
import userRepository from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";

const hashKey = 10;
const JWT_KEY = process.env.JWT_KEY;

async function CreateNewUserAndVerify(user: userType) {
  const userInDatabase = await userRepository.FindByEmail(user.email);
  console.log(hashKey);
  if (userInDatabase) throw conflictError("Email already in database");
  const passwordHash = await bcrypt.hash(user.password, hashKey);

  await userRepository.Insert({
    ...user,
    password: passwordHash,
  });
  return;
}

async function AuthenticateUser(user: userType) {
  const userInDatabase = await userRepository.FindByEmail(user.email);
  if (!userInDatabase)
    throw notFoundError("User not found, please check your e-mail");
  const passwordIsValid = await bcrypt.compare(
    user.password,
    userInDatabase.password
  );
  if (!passwordIsValid) throw unauthorizedError("Password Incorrect");
  const token = jwt.sign(
    {
      userId: userInDatabase.id,
    },
    JWT_KEY
  );
  return token;
}
async function FindUserById(id: number) {
  const user = await userRepository.FindById(id);
  return user;
}

export default { CreateNewUserAndVerify, AuthenticateUser, FindUserById };
