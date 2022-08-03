import { prisma } from "../database.js";

async function FindById(id: number) {
  const result = await prisma.teachersDisciplines.findUnique({
    where: { id },
  });
  return result;
}

async function FindByTeacherAndDiscipline(
  teacherId: number,
  disciplineId: number
) {
  const result = await prisma.teachersDisciplines.findFirst({
    where: {
      AND: [{ teacherId }, { disciplineId }],
    },
  });
  return result;
}

async function Create(teacherId: number, disciplineId: number) {
  const result = await prisma.teachersDisciplines.create({
    data: {
      teacherId,
      disciplineId,
    },
  });
  return result;
}

export default { FindById, FindByTeacherAndDiscipline, Create };
