import {conexao} from '../config/db.js';

export async function buscarPlayers(id){
    const [resultado] = await conexao.query("SELECT id, nickname, plataforma FROM players WHERE = ?", {id});
    return resultado [0];
}

export async function listarPlayers(){
    const [resultado] = await conexao.query("SELECT id, nickame, plataforma FROM players ORDER BY id DESC");
    return resultado;
}

export async function criarPlayers(data){
    const {nickname, plataforma} = data 

    const [resultado] = await conexao.query("INSERT INTO players(nickame, plataforma) VALUES (?, ?)", [nickname, plataforma]);
    return resultado.insertId
}

export async function atualizarPlayers(data){
    const {nickname, plataforma} = data

    await conexao.query("UPDATE players SET nickame=? plataforma=? WHERE id=?", [nickname, plataforma, id]);
}

export async function deletarPlayer(id){
    await conexao.query("DELETE FROM players WHERE id=?", [id]);
}

