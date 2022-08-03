import { testType } from "../types/testsTypes.js";
import testsRepository from "../repositories/testsRepository.js";
import categoriesRepository from "../repositories/categoriesRepository.js";
import teachersDisciplineRepository from "../repositories/teachersDisciplineRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";

async function Create(test: testType) {
  const existsCategoriesOnDb = await categoriesRepository.FindById(
    test.categoryId
  );
  if (!existsCategoriesOnDb) throw notFoundError("category id not found");
  const existsTeacherDisciplineIdOnDb =
    await teachersDisciplineRepository.FindById(test.teacherDisciplineId);
  if (!existsTeacherDisciplineIdOnDb)
    throw notFoundError("Teacher - Discipline Relation Not Exists");
  await testsRepository.Insert(test);
  return;
}

async function FindRelationTDIfExists(teacherId: number, disciplineId: number) {
  const exists = await teachersDisciplineRepository.FindByTeacherAndDiscipline(
    teacherId,
    disciplineId
  );
  return exists;
}

async function CreateRelationTD(teacherId: number, disciplineId: number) {
  const relation = await teachersDisciplineRepository.Create(
    teacherId,
    disciplineId
  );
  return relation;
}

async function GetAllByTerms() {
  const result = await testsRepository.FindByTerms();
  return result;
}

async function GetAllByTeacher() {
  const result = await testsRepository.FindTestsByTeachers();
  return result;
}
export default {
  Create,
  FindRelationTDIfExists,
  CreateRelationTD,
  GetAllByTerms,
  GetAllByTeacher,
};
