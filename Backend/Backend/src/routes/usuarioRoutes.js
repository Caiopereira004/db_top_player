import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js"

const router = Router();

router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarPorId);
router.post("/", usuarioController.criar);
router.post("/login", usuarioController.login);

export default router