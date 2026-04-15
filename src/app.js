import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swagger.js";

import usuarioRoutes from "./routes/usuarioRoutes.js";
import jogoRoutes from "./routes/jogoRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";
import partidaRoutes from "./routes/partidaRoutes.js";
import rankingRoutes from "./routes/rankingRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV !== "test") {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.get("/", (req, res) => {
    res.json({ msg: "Hello World" });
});

app.use("/usuarios", usuarioRoutes);
app.use("/jogos", jogoRoutes);
app.use("/players", playerRoutes);
app.use("/ranking", rankingRoutes);
app.use("/partidas", partidaRoutes);

export default app;