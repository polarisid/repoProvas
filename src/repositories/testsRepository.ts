import { prisma } from "../database.js";
import { testType } from "../types/testsTypes.js";

async function Insert(test: testType) {
  const result = await prisma.tests.create({
    data: test,
  });
  return result;
}

async function FindByTerms() {
  const result = await prisma.terms.findMany({
    include: {
      disciplines: {
        include: {
          teachersDisciplines: {
            include: {
              teachers: true,
              tests: {
                include: {
                  categories: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return result;
}
async function FindTestsByTeachers() {
  return prisma.teachersDisciplines.findMany({
    include: {
      teachers: true,
      disciplines: true,
      tests: {
        include: {
          categories: true,
        },
      },
    },
  });
}

export default { Insert, FindByTerms, FindTestsByTeachers };
