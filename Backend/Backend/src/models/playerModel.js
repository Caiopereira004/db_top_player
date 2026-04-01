import {conexao} from '../config/db.js';

export async function listarPlayers(){
    const [resultado] = await conexao.query("SELECT id, nickname, plataforma FROM players ORDER BY id DESC");
    return resultado;
}

export async function buscarPlayers(id){
    const [resultado] = await conexao.query("SELECT id, nickname, plataforma FROM players WHERE id = ?", [id]);
    return resultado [0];
}

export async function criarPlayers(data){
    const {nickname, plataforma} = data 

    const [resultado] = await conexao.query("INSERT INTO players(nickname, plataforma) VALUES (?, ?)", [nickname, plataforma]);
    return resultado.insertId
}

export async function atualizarPlayer(id, data){
    const { nickname, plataforma } = data;

    await conexao.query(
        "UPDATE players SET nickname = ?, plataforma = ? WHERE id = ?",
        [nickname, plataforma, id]
    );
}

export async function deletarPlayer(id){
    await conexao.query("DELETE FROM players WHERE id=?", [id]);
}

