import request from "supertest"
import app from "../src/app.js"

describe("Listar jogos", () =>{
    test("Deve retornar todos os jogos", async () =>{
        const resposta = await request(app).get("/usuarios");

        expect(resposta.status).toBe(200);
    })
})