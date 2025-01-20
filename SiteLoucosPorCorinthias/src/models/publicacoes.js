var database = require("../database/config");

function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
SELECT 
    p.idPostagens,
    p.titulo,
    p.descricao,
    DATE_FORMAT(p.data, '%d/%m/%Y %H:%i:%s') AS dataFormatada,
    p.fkUsuario,
    u.idUsuario,
    u.nome,
    u.imagem AS imagemUsuario,
    p.imagem AS imagemPostagem,
    CASE 
        WHEN c.fkUsuario IS NOT NULL THEN 1 
        ELSE 0 
    END AS curtido
    FROM postagens p
    INNER JOIN usuario u ON p.fkUsuario = u.idUsuario
    LEFT JOIN Curtidas c ON c.fkPostagem = p.idPostagens AND c.fkUsuario = ${idUsuario}


    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `SELECT * FROM Postagens WHERE fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: " + instrucaoSql)
    return database.executar(instrucaoSql)
}


function publicar(publicacao) {
    const instrucao = `
    INSERT INTO Postagens (titulo, descricao, imagem, fkUsuario, data)
    VALUES ('${publicacao.titulo}', '${publicacao.descricao}', '${publicacao.imagem}', '${publicacao.idUsuario}', NOW())
`
    return database.executar(instrucao)
}


function deletar(idPostagens) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPostagens);
    
    var instrucaoSql = `DELETE FROM Curtidas WHERE fkPostagem = ${idPostagens}; `
    database.executar(instrucaoSql)


    var instrucaoSql2 = `DELETE FROM postagens WHERE idPostagens = ${idPostagens};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql2)
}

function curtirPostagem(idPostagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL")

    var instrucaoSql = `
        INSERT INTO Curtidas (fkUsuario, fkPostagem) 
        VALUES (${idUsuario}, ${idPostagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

function removerCuritdaPostagem(idPostagem,idUsuario){
    console.log("descuritda")
    var instrucaoSql= `
    DELETE FROM Curtidas WHERE fkPostagem = ${idPostagem} AND fkUsuario = ${idUsuario};`

    console.log('executando'+instrucaoSql)
    return database.executar(instrucaoSql)
}






function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucaoSql = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    curtirPostagem,
    removerCuritdaPostagem,
    publicar,
    editar,
    deletar
}
