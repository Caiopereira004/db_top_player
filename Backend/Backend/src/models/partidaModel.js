import { conexao } from "../config/db.js";

export async function listarPartidas() {
    const [rows] = await conexao.query(`
        SELECT 
            p.id,
            j.nome AS jogo,
            pl.nickname,
            p.pontos,
            p.data_partida
        FROM partidas p
        JOIN jogos j ON j.id = p.jogo_id
        JOIN players pl ON pl.id = p.player_id
        ORDER BY p.data_partida DESC
    `);
    return rows;
}

export async function buscarPartidas({ jogo_id, player_id, data_inicio, data_fim }) {
    let query = "SELECT * FROM partidas WHERE 1=1";
    const params = [];

    if (jogo_id) {
        query += " AND jogo_id = ?";
        params.push(jogo_id);
    }

    if (player_id) {
        query += " AND player_id = ?";
        params.push(player_id);
    }

    if (data_inicio) {
        query += " AND data_partida >= ?";
        params.push(data_inicio);
    }

    if (data_fim) {
        query += " AND data_partida <= ?";
        params.push(data_fim);
    }

    const [rows] = await conexao.query(query, params);
    return rows;
}

export async function deletarPartidas(id) {
    const [result] = await conexao.query(
        "DELETE FROM partidas WHERE id = ?",
        [id]
    );
    return result;
}