import * as model from "../models/partidaModel.js";

export async function listar(req, res) {
    res.json(await model.listarPartidas());
}

export async function buscar(req, res) {
    res.json(await model.buscarPartidas(req.query));
}

export async function deletar(req, res) {
    await model.deletarPartidas(req.params.id);
    res.json({ msg: "Partida deletada" });
}