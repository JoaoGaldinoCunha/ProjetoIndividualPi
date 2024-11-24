var database = require("../database/config");

function buscarQuestionariosPorId(idUsuario) {

  var instrucaoSql = `SELECT * FROM resultado_questionario WHERE fkUsuario=  ${idUsuario}  ORDER BY idresultadoQuestionario DESC LIMIT 5;
`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(qtdDeAcertos,idUsuario) {
  
  var instrucaoSql = `INSERT INTO resultado_questionario (qtdDeAcertos,fkUsuario)VALUES(${qtdDeAcertos},${idUsuario}) `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarQuestionariosPorId,
  cadastrar
}
