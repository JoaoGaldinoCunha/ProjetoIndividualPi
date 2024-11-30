var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, razao_social, cnpj, codigo_ativacao FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarCurtidasPorIdDoUsuario(idUsuario) {
  var instrucaoSql = `		 
  SELECT p.titulo, COUNT(c.idCurtida) AS curtidas
    FROM Postagens AS p
  LEFT JOIN Curtidas AS c ON p.idPostagens = c.fkPostagem
    WHERE p.fkUsuario = ${idUsuario}
  GROUP BY p.idPostagens
    ORDER BY p.data DESC
  LIMIT 5;
  `;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

function maiorPostagemCurtida(idUsuario){
  var instrucaoSql = `
  SELECT p.titulo, COUNT(c.idCurtida) AS curtidas
    FROM Postagens AS p
  LEFT JOIN Curtidas AS c ON p.idPostagens = c.fkPostagem
    WHERE p.fkUsuario = ${idUsuario}
  GROUP BY p.idPostagens
    ORDER BY curtidas DESC
  LIMIT 1;`;
  return database.executar(instrucaoSql);
}

function mediaDeCurtidasPorPostagem(idUsuario){
var instrucaoSql=`

SELECT AVG(curtidas) AS curtidas_media_geral
FROM (
  SELECT COUNT(c.idCurtida) AS curtidas
  FROM Postagens p
  LEFT JOIN Curtidas c ON p.idPostagens = c.fkPostagem
  WHERE p.fkUsuario = ${idUsuario}
  GROUP BY p.idPostagens
) AS subconsulta;
`

return database.executar(instrucaoSql);

}


module.exports = {
  mediaDeCurtidasPorPostagem,
  maiorPostagemCurtida,
  buscarCurtidasPorIdDoUsuario, 
  buscarPorId,
  cadastrar, 
  listar };
