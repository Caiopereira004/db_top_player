import request from "supertest";
import app from "../src/app.js";
import { conexao } from "../src/config/db.js";

describe("Jogos API", () => {

    let jogoId;

    describe("GET /jogos", () => {

        test("Deve retornar todos os jogos", async () => {
            const resposta = await request(app).get("/jogos");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar um array", async () => {
            const resposta = await request(app).get("/jogos");

            expect(resposta.body).toBeInstanceOf(Array);
        });

    });

    describe("POST /jogos", () => {

        test("Deve criar um jogo", async () => {
            const resposta = await request(app)
                .post("/jogos")
                .send({
                    nome: "Roblox",
                    genero: "Multiplayer"
                });

            expect(resposta.status).toBe(200);

            jogoId = resposta.body.id; // 👈 PEGA O ID REAL
        });

        test("Deve retornar erro se faltar dados", async () => {
            const resposta = await request(app)
                .post("/jogos")
                .send({
                    nome: "Assassin's Creed"
                });

            expect(resposta.status).toBe(400);
        });

    });


    describe("GET /jogos/:id", () => {

        test("Deve retornar um jogo existente", async () => {
            const resposta = await request(app).get(`/jogos/${jogoId}`);

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar 404 se não encontrar", async () => {
            const resposta = await request(app).get("/jogos/999999");

            expect(resposta.status).toBe(404);
        });

    });

    describe("PUT /jogos/:id", () => {

        test("Deve atualizar um jogo existente", async () => {
            const resposta = await request(app)
                .put(`/jogos/${jogoId}`)
                .send({
                    nome: "FIFA 2025",
                    genero: "Esporte"
                });

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar 404 ao atualizar inexistente", async () => {
            const resposta = await request(app)
                .put("/jogos/999999")
                .send({
                    nome: "Nada",
                    genero: "Nada"
                });

            expect(resposta.status).toBe(404);
        });

    });

    describe("DELETE /jogos/:id", () => {

        test("Deve deletar um jogo existente", async () => {
            const resposta = await request(app).delete(`/jogos/${jogoId}`);

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar 404 ao deletar inexistente", async () => {
            const resposta = await request(app).delete("/jogos/999999");

            expect(resposta.status).toBe(404);
        });

    });

});

afterAll(async () => {
    await conexao.end();
});