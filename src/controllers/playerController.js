import * as playerModel from "../models/playerModel.js";

export async function listarPlayers(req,res) {
    try {
        const players = await playerModel.listarPlayers();
        res.json(players);
    } catch (erro) {
        res.status(500).json({msg: "Erro no servidor", erro});
    }
}

export async function buscarPlayers(req, res) {
    const data = await playerModel.buscarPlayers(req.params.id);
    if (!data) return res.status(404).json({ msg: "Player não encontrado" });
    res.json(data);
}

export async function criarPlayers(req, res) {
    try {
        const id = await playerModel.criarPlayers(req.body);
        res.status(201).json({ id });
    } catch (erro) {
        console.error("ERRO REAL:", erro); // 👈 IMPORTANTE
        res.status(500).json({ msg: "Erro no servidor" });
    }
}

export async function atualizarPlayer(req, res) {
    await playerModel.atualizarPlayer(req.params.id, req.body);
    res.json({ msg: "Atualizado" });
}

export async function deletarPlayer(req, res) {
    await playerModel.deletarPlayer(req.params.id);
    res.json({ msg: "Deletado" });
}