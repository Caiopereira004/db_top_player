import { Router } from "express";
import * as partidaController from "../controllers/partidaController.js";

const router = Router();

router.get("/", partidaController.listarPartidas);
router.get("/buscar", partidaController.buscarPartidas);
router.delete("/:id", partidaController.deletarPartidas);

export default router;