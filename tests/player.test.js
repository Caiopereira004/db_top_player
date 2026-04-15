import request from "supertest";
import app from "../src/app.js";
import { conexao } from "../src/config/db.js";

describe("Players API", () => {

    describe("GET /players", () => {

        test("Deve retornar todos os players", async () => {
            const resposta = await request(app).get("/players");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar um array", async () => {
            const resposta = await request(app).get("/players");

            expect(resposta.body).toBeInstanceOf(Array);
        });

    });


    describe("GET /players/:id", () => {

        test("Deve retornar um player existente", async () => {
            const resposta = await request(app).get("/players/1");

            expect(resposta.status).toBe(200);
        });

        test("Deve retornar 404 se não encontrar", async () => {
            const resposta = await request(app).get("/players/9999");

            expect(resposta.status).toBe(404);
        });

    });


    describe("POST /players", () => {

        test("Deve criar um player", async () => {
            const resposta = await request(app)
                .post("/players")
                .send({
                    nickname: "Caio",
                    plataforma: "PC"
                });

            expect(resposta.status).toBe(201);
        });

    });


    describe("PUT /players/:id", () => {

        test("Deve atualizar um player", async () => {
            const resposta = await request(app)
                .put("/players/1")
                .send({
                    nickname: "NovoNick",
                    plataforma: "PS5"
                });

            expect(resposta.status).toBe(200);
        });

    });


    describe("DELETE /players/:id", () => {

        test("Deve deletar um player", async () => {
            const resposta = await request(app).delete("/players/1");

            expect(resposta.status).toBe(200);
        });

    });

});

afterAll(async () => {
    await conexao.end();
});