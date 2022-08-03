import app from "../src/app.js";
import supertest from "supertest";
import { prisma } from "../src/database.js";

beforeAll(async () => {
  await prisma.users.deleteMany({});
});
describe("POST /users/signup", () => {
  it("Criando um novo usuário, deve retornar status 201", async () => {
    const body = {
      email: "dani@gmail.com",
      password: "122132",
    };

    const result = await supertest(app).post("/users/signup").send(body);
    const status = result.status;

    expect(status).toEqual(201);
  });
});

describe("POST /users/signup - teste de duplicidade email", () => {
  it("Criando um novo usuário com um email já existente, deve retornar status 409", async () => {
    const body = {
      email: "dani@gmail.com",
      password: "122132",
    };

    const result = await supertest(app).post("/users/signup").send(body);
    const status = result.status;

    expect(status).toEqual(409);
  });
});

describe("POST /users/signin ", () => {
  it("Logando com um novo usuário, deve retornar status 200", async () => {
    const body = {
      email: "dani@gmail.com",
      password: "122132",
    };

    const result = await supertest(app).post("/users/signin").send(body);
    const status = result.status;

    expect(status).toEqual(200);
  });
});

describe("POST /tests - Criação de teste", () => {
  it("Criando um novo teste, deve retornar status 201", async () => {
    const body = {
      name: "novo test",
      pdfUrl: "www.google.com",
      categoryId: 1,
      disciplineId: 4,
      teacherId: 1,
    };

    const result = await supertest(app).post("/tests").send(body);
    const status = result.status;

    expect(status).toEqual(201);
  });
});

describe("GET /tests/terms - Selecionando todos os testes por periodo (terms)", () => {
  it("Pegando todos os testes, deve retornar status 200", async () => {
    const result = await supertest(app).get("/tests/terms");
    const status = result.status;

    expect(status).toEqual(200);
  });
});

describe("GET /tests/teachers - Selecionando todos os testes por professores", () => {
  it("Pegando todos os testes, deve retornar status 200", async () => {
    const result = await supertest(app).get("/tests/teachers");
    const status = result.status;

    expect(status).toEqual(200);
  });
});
