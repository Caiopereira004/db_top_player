import * as playerModel from "../models/playerModel.js";

export async function listar(req, res) {
    res.json(await playerModel.listarPlayers());
}

export async function buscar(req, res) {
    const data = await playerModel.buscarPlayers(req.params.id);
    if (!data) return res.status(404).json({ msg: "Player não encontrado" });
    res.json(data);
}

export async function criar(req, res) {
    const id = await playerModel.criarPlayer(req.body);
    res.status(201).json({ id });
}

export async function atualizar(req, res) {
    await playerModel.atualizarPlayer(req.params.id, req.body);
    res.json({ msg: "Atualizado" });
}

export async function deletar(req, res) {
    await playerModel.deletarPlayer(req.params.id);
    res.json({ msg: "Deletado" });
}