import { Request, Response } from "express";
import { testType } from "../types/testsTypes.js";
import testsServices from "../services/testsServices.js";
async function CreateTest(req: Request, res: Response) {
  const newTest = req.body;
  let findRelation = await testsServices.FindRelationTDIfExists(
    newTest.teacherId,
    newTest.disciplineId
  );
  if (!findRelation) {
    findRelation = await testsServices.CreateRelationTD(
      newTest.teacherId,
      newTest.disciplineId
    );
  }
  const testFormated = {
    name: newTest.name,
    pdfUrl: newTest.pdfUrl,
    categoryId: newTest.categoryId,
    teacherDisciplineId: findRelation.id,
  } as testType;
  await testsServices.Create(testFormated);
  res.sendStatus(201);
}

async function FindGroupByTermsAndDisciplines(req: Request, res: Response) {
  const result = await testsServices.GetAllByTerms();
  res.send(result);
}

async function FindGroupByTeacher(req: Request, res: Response) {
  const result = await testsServices.GetAllByTeacher();
  res.send(result);
}

export default {
  CreateTest,
  FindGroupByTermsAndDisciplines,
  FindGroupByTeacher,
};
