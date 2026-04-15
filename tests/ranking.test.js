import request from "supertest";
import app from "../src/app.js";
import { conexao } from "../src/config/db.js";

describe("Ranking API", () => {

    describe("GET /ranking", () => {

        test("Deve retornar o ranking geral", async () => {
            const resposta = await request(app).get("/ranking");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar um array", async () => {
            const resposta = await request(app).get("/ranking");

            expect(resposta.body).toBeInstanceOf(Array);
        });

        test("Deve respeitar o limite", async () => {
            const resposta = await request(app).get("/ranking?limite=5");

            expect(resposta.status).toBe(200);
            expect(resposta.body.length).toBeLessThanOrEqual(5);
        });

    });


    describe("GET /ranking/:id", () => {

        test("Deve retornar ranking de um jogo", async () => {
            const resposta = await request(app).get("/ranking/1");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar um array", async () => {
            const resposta = await request(app).get("/ranking/1");

            expect(resposta.body).toBeInstanceOf(Array);
        });

        test("Deve respeitar o limite por jogo", async () => {
            const resposta = await request(app).get("/ranking/1?limite=3");

            expect(resposta.status).toBe(200);
            expect(resposta.body.length).toBeLessThanOrEqual(3);
        });

    });

});

afterAll(async () => {
    await conexao.end();
});