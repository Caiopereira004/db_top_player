import * as model from "../models/rankingModel.js";

export async function geral(req, res) {
    const limite = req.query.limite || 10;
    res.json(await model.rankingGeral(limite));
}

export async function porJogo(req, res) {
    const limite = req.query.limite || 10;
    res.json(await model.rankingPorJogo(req.params.id, limite));
}