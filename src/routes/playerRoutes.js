import { Router } from "express";
import * as playerController from "../controllers/playerController.js";

const router = Router();

/**
 * @swagger
 * /players:
 *   get:
 *     summary: Lista todos os players
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Lista de players retornada com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.get("/", playerController.listarPlayers);


/**
 * @swagger
 * /players/{id}:
 *   get:
 *     summary: Busca um player por ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player encontrado
 *       404:
 *         description: Player não encontrado
 */
router.get("/:id", playerController.buscarPlayers);


/**
 * @swagger
 * /players:
 *   post:
 *     summary: Cria um novo player
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 example: "Caio"
 *               plataforma:
 *                 type: string
 *                 example: "PC"
 *     responses:
 *       201:
 *         description: Player criado com sucesso
 *       500:
 *         description: Erro no servidor
 */
router.post("/", playerController.criarPlayers);


/**
 * @swagger
 * /players/{id}:
 *   put:
 *     summary: Atualiza um player
 *     tags: [Players]
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
 *               nickname:
 *                 type: string
 *                 example: "NovoNick"
 *               plataforma:
 *                 type: string
 *                 example: "PS5"
 *     responses:
 *       200:
 *         description: Player atualizado com sucesso
 */
router.put("/:id", playerController.atualizarPlayer);


/**
 * @swagger
 * /players/{id}:
 *   delete:
 *     summary: Deleta um player
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Player deletado com sucesso
 */
router.delete("/:id", playerController.deletarPlayer);

export default router;