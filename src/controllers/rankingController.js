import * as model from "../models/rankingModel.js";

export async function geral(req, res) {
    try {
        const limite = Number(req.query.limite) || 10;

        const data = await model.rankingGeral(limite);

        return res.json(data);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Erro no ranking geral" });
    }
}

export async function porJogo(req, res) {
    try {
        const limite = Number(req.query.limite) || 10;

        const data = await model.rankingPorJogo(req.params.id, limite);

        return res.json(data);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Erro no ranking por jogo" });
    }
}