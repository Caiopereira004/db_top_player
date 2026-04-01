import { conexao } from "../config/db.js";

export async function rankingGeral(limite = 10) {
    const [resultado] = await conexao.query(
        "SELECT * FROM vw_ranking_por_jogo ORDER BY total_pontos DESC LIMIT ?",
        [limite]
    );
    return resultado;
}

export async function rankingPorJogo(jogo_id, limite = 10) {
    const [resultado] = await conexao.query(
        `SELECT * FROM vw_ranking_por_jogo 
         WHERE jogo_id = ? 
         ORDER BY total_pontos DESC 
         LIMIT ?`,
        [jogo_id, limite]
    );
    return resultado;
}