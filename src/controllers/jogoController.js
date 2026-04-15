import * as jogoModel from "../models/jogoModel.js";

export async function listarJogo(req, res) {
    const jogos = await jogoModel.listarJogo();
    return res.json(jogos);
}

export async function buscarJogo(req, res) {
    const jogo = await jogoModel.buscarJogo(req.params.id);

    if (!jogo) {
        return res.status(404).json({ msg: "Jogo não encontrado!" });
    }

    return res.json(jogo);
}

export async function criarJogo(req, res) {
    try {
        const { nome, genero } = req.body;

        if (!nome || !genero) {
            return res.status(400).json({ msg: "Nome e gênero são obrigatórios!" });
        }

        const id = await jogoModel.criarJogo({ nome, genero });

        return res.status(201).json({
            msg: "Jogo criado com sucesso!",
            id
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Erro interno" });
    }
}

export async function atualizarJogo(req, res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarJogo(id);

    if (!jogo) {
        return res.status(404).json({ msg: "Jogo não encontrado!" });
    }

    await jogoModel.atualizarJogo(id, req.body);

    return res.json({ msg: "Jogo atualizado com sucesso!" });
}

export async function deletarJogo(req, res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarJogo(id);

    if (!jogo) {
        return res.status(404).json({ msg: "Jogo não encontrado!" });
    }

    await jogoModel.deletarJogo(id);

    return res.json({ msg: "Jogo deletado com sucesso!" });
}