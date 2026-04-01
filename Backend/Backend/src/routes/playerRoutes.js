import { Router } from "express";
import * as playerController from "../controllers/playerController.js";

const router = Router();

router.get("/", playerController.listarPlayers);
router.get("/:id", playerController.buscarPlayers);
router.post("/", playerController.criarPlayers);
router.put("/:id", playerController.atualizarPlayer);
router.delete("/:id", playerController.deletarPlayer);

export default router;