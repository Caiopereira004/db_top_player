import { Router } from "express";
import * as rankingController from "../controllers/rankingController.js";

const router = Router();

router.get("/", rankingController.geral);
router.get("/:id", rankingController.porJogo);

export default router;