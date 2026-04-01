import { Router } from "express";
import * as jogoController from "../controllers/jogoController.js"

const router = Router();

router.get("/", jogoController.listarJogo);
router.get("/:id", jogoController.buscarJogo);
router.post("/", jogoController.criarJogo);
router.put("/:id", jogoController.atualizarJogo);
router.delete("/:id", jogoController.deletarJogo);

export default router;