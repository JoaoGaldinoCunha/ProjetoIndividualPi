var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvar(usuario) {
    const instrucao = `insert into Usuario (nome, email,imagem,cpf,senha) values ('${usuario.nome}', '${usuario.email}', '${usuario.imagem}', '${usuario.cpf}', '${usuario.senha}')`;
    return database.executar(instrucao);
  }

  
function buscarUsuarioPorId(idUsuario) {
    const instrucao = `select * from usuario where idUsuario=${idUsuario} ;`;
    return database.executar(instrucao);
  }

  
function atualizarDadosPerfil(nome, email, senha, idUsuario,cpf) {
  const instrucao = `UPDATE usuario SET nome='${nome}',cpf='${cpf}',email='${email}',senha='${senha}' WHERE idUsuario=${idUsuario};
;`;
  return database.executar(instrucao);
}
module.exports = {
    autenticar,
    salvar,
    buscarUsuarioPorId,
    atualizarDadosPerfil
};