import { Request, Response } from "express";
import { userType } from "../types/userTypes.js";
import userServices from "../services/userServices.js";

async function Signup(req: Request, res: Response) {
  const user = {
    email: req.body.email.toLowerCase(),
    password: req.body.password,
  } as userType;
  await userServices.CreateNewUserAndVerify(user);

  res.status(201).send("Created");
}

async function Signin(req: Request, res: Response) {
  const user = {
    email: req.body.email.toLowerCase(),
    password: req.body.password,
  } as userType;

  const token = await userServices.AuthenticateUser(user);
  res.status(200).send(token);
}
export default {
  Signup,
  Signin,
};
