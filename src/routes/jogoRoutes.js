import { Router } from "express";
import * as jogoController from "../controllers/jogoController.js"

const router = Router();

/**
 * @swagger
 * /jogos:
 *   get:
 *     summary: Lista todos os jogos
 *     tags: [Jogos]
 *     responses:
 *       200:
 *         description: Lista de jogos retornada com sucesso
 */
router.get("/", jogoController.listarJogo);


/**
 * @swagger
 * /jogos/{id}:
 *   get:
 *     summary: Busca um jogo por ID
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo encontrado
 *       404:
 *         description: Jogo não encontrado
 */
router.get("/:id", jogoController.buscarJogo);


/**
 * @swagger
 * /jogos:
 *   post:
 *     summary: Cria um novo jogo
 *     tags: [Jogos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "GTA"
 *               genero:
 *                 type: string
 *                 example: "Ação"
 *     responses:
 *       200:
 *         description: Jogo criado com sucesso
 *       400:
 *         description: Nome e gênero são obrigatórios
 */
router.post("/", jogoController.criarJogo);


/**
 * @swagger
 * /jogos/{id}:
 *   put:
 *     summary: Atualiza um jogo
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "FIFA 2025"
 *               genero:
 *                 type: string
 *                 example: "Esporte"
 *     responses:
 *       200:
 *         description: Jogo atualizado com sucesso
 *       404:
 *         description: Jogo não encontrado
 */
router.put("/:id", jogoController.atualizarJogo);


/**
 * @swagger
 * /jogos/{id}:
 *   delete:
 *     summary: Deleta um jogo
 *     tags: [Jogos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jogo deletado com sucesso
 *       404:
 *         description: Jogo não encontrado
 */
router.delete("/:id", jogoController.deletarJogo);

export default router;