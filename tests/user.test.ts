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
