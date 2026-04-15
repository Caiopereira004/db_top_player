import { Router } from "express";
import * as rankingController from "../controllers/rankingController.js";

const router = Router();

/**
 * @swagger
 * /ranking:
 *   get:
 *     summary: Retorna o ranking geral
 *     tags: [Ranking]
 *     parameters:
 *       - in: query
 *         name: limite
 *         required: false
 *         description: Quantidade máxima de registros
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Ranking geral retornado com sucesso
 */
router.get("/", rankingController.geral);


/**
 * @swagger
 * /ranking/{id}:
 *   get:
 *     summary: Retorna o ranking por jogo
 *     tags: [Ranking]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do jogo
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limite
 *         required: false
 *         description: Quantidade máxima de registros
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Ranking por jogo retornado com sucesso
 */
router.get("/:id", rankingController.porJogo);

export default router;