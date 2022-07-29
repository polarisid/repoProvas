import { prisma } from "../database.js";
import { userType } from "../types/userTypes.js";

async function Insert(user: userType) {
  const result = await prisma.users.create({
    data: user,
  });
  return result;
}

async function FindByEmail(email: string) {
  const result = await prisma.users.findUnique({
    where: { email },
  });
  return result;
}

async function FindById(id: number) {
  const result = await prisma.users.findUnique({
    where: { id },
  });
  return result;
}

export default { Insert, FindByEmail, FindById };
