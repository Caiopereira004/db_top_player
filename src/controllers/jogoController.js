import * as jogoModel from "../models/jogoModel.js";

export async function listarJogo(req,res) {
    const jogos = await jogoModel.listarJogo();
    res.json(jogos);
};

export async function buscarJogo(req,res) {
    const jogos = await jogoModel.buscarJogo(req.params.id);
    if(!jogos){
        return res.status(404).json({msg: "Jogo não encontrado!"})
    }
    res.json(jogos)
}

export async function criarJogo(req,res) {
    const {nome, genero} = req.body;

    if(!nome || !genero){
        return res.status(400).json({msg: "Nome e gênero são obrigatórios!"});
    }
    const id = await jogoModel.criarJogo(req.body);

    res.status(200).json({msg: "Jogo criado com sucesso!", id});

    console.log(req.body);
}

export async function atualizarJogo(req,res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarJogo(id);

    if(!jogo) {
        return res.status(404).json({msg: "Jogo não encontrado!"})
    }
    await jogoModel.atualizarJogo(id, req.body);
    res.json({msg: "Jogo atualizado com sucesso!"});
}

export async function deletarJogo (req,res) {
    const id = req.params.id;

    const jogo = await jogoModel.buscarJogo(id);

    if (!jogo) {
        return res.status(404).json({msg: "Jogo não econtrado"})
    }

    await jogoModel.deletarJogo(id);

    res.json({msg: "Jogo deletado com sucesso!"});
}