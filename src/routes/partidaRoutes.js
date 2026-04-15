import { Router } from "express";
import * as partidaController from "../controllers/partidaController.js";

const router = Router();

/**
 * @swagger
 * /partidas:
 *   get:
 *     summary: Lista todas as partidas
 *     tags: [Partidas]
 *     responses:
 *       200:
 *         description: Lista de partidas retornada com sucesso
 */
router.get("/", partidaController.listarPartidas);


/**
 * @swagger
 * /partidas/buscar:
 *   get:
 *     summary: Busca partidas com filtros
 *     tags: [Partidas]
 *     parameters:
 *       - in: query
 *         name: jogador_id
 *         required: false
 *         description: ID do jogador
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: jogo_id
 *         required: false
 *         description: ID do jogo
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Partidas encontradas
 */
router.get("/buscar", partidaController.buscarPartidas);


/**
 * @swagger
 * /partidas/{id}:
 *   delete:
 *     summary: Deleta uma partida
 *     tags: [Partidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da partida
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Partida deletada com sucesso
 */
router.delete("/:id", partidaController.deletarPartidas);

export default router;