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
  SELECT titulo,COUNT(idCurtida) as curtidas
FROM postagens as p
	LEFT JOIN curtidas as c
ON p.idPostagens= c.fkPostagem
	WHERE p.fkUsuario=${idUsuario}
GROUP BY idPostagens;
  `;

  return database.executar(instrucaoSql);
}

function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarCurtidasPorIdDoUsuario, 
  buscarPorId, 
  cadastrar, 
  listar };
