import { Router } from "express";
import * as partidaController from "../controllers/partidaController.js";

const router = Router();

router.get("/", partidaController.listar);
router.get("/buscar", partidaController.buscar);
router.delete("/:id", partidaController.deletar);

export default router;