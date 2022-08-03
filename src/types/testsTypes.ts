// - Nome
// - Link para o PDF
// - Categoria (P1, P2, P3, P2ch, Outras)
// - Disciplina
// - Pessoa instrutora

import { teachersDisciplines, tests } from "@prisma/client";

type testType = Omit<tests, "id">;

type testReceivedType = {
  name: string;
  pdfUrl: string;
  categoryId: number;
  disciplineId: number;
  teacherId: number;
};

export { testType, testReceivedType };
