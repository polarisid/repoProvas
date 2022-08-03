import { prisma } from "../database.js";

async function FindById(id: number) {
  const result = await prisma.teachers.findUnique({
    where: { id },
  });
  return result;
}

export default { FindById };
