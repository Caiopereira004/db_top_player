import request from "supertest";
import app from "../src/app.js";
import { conexao } from "../src/config/db.js";

describe("Partidas API", () => {

    describe("GET /partidas", () => {

        test("Deve retornar todas as partidas", async () => {
            const resposta = await request(app).get("/partidas");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar um array", async () => {
            const resposta = await request(app).get("/partidas");

            expect(resposta.body).toBeInstanceOf(Array);
        });

    });


    describe("GET /partidas/buscar", () => {

        test("Deve buscar partidas com filtros", async () => {
            const resposta = await request(app)
                .get("/partidas/buscar")
                .query({ jogador_id: 1 });

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar um array na busca", async () => {
            const resposta = await request(app)
                .get("/partidas/buscar")
                .query({ jogador_id: 1 });

            expect(resposta.body).toBeInstanceOf(Array);
        });

    });


    describe("DELETE /partidas/:id", () => {

        test("Deve deletar uma partida", async () => {
            const resposta = await request(app).delete("/partidas/1");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar mensagem de sucesso", async () => {
            const resposta = await request(app).delete("/partidas/1");

            expect(resposta.body.msg).toBe("Partida deletada");
        });

    });

});

afterAll(async () => {
    await conexao.end();
});