var publicacaoesModel = require("../models/publicacoes");


function publicar(req, res) {
    console.log(req.body); 
    console.log(req.file); 

    var idUsuario = req.params.idUsuario;
    const { titulo, descricao } = req.body;
    const imagem = req.file ? req.file.filename : null;
    
    if (!titulo) {
        return res.status(400).send("O título está indefinido!");
    }
    if (!descricao) {
        return res.status(400).send("A descrição está indefinida!");
    }

    const publicacao = { titulo, descricao, imagem, idUsuario };

    publicacaoesModel.publicar(publicacao)
        .then(resultado => {
            res.status(201).send("Postagem criada com sucesso!");
        })
        .catch(err => {
            console.error("Erro no model:", err);
            res.status(500).send("Erro ao criar postagem: " + err);
        });
}




function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    publicacaoesModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}




function listar(req, res) {
    const idUsuario = req.headers['idusuario'];  
    
    if (!idUsuario) {
        console.error('idUsuario não foi encontrado nos cabeçalhos');
        return res.status(400).json({ message: 'ID do usuário não encontrado no cabeçalho' });
    }

    publicacaoesModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar postagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletar(req, res) {
    var idPostagens = req.params.idPostagens;

    publicacaoesModel.deletar(idPostagens)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function curtirPostagem(req, res) {
    var idPostagem = req.body.idPostagem;
    var idUsuario = req.body.idUsuario;
    var curtida=req.body.curtida

    if(curtida){
        publicacaoesModel.curtirPostagem(idPostagem,idUsuario)
        .then(
            function (resultado) {
                    res.status(200).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao curtir  ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }else{
        publicacaoesModel.removerCuritdaPostagem(idPostagem, idUsuario)
        .then(function (resultado) {
            res.status(200).json({ message: "descurtida  registrada com sucesso!" });
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json({ error: erro.sqlMessage });
        })
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var idAviso = req.params.idAviso;

    publicacaoesModel.editar(novaDescricao, idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}



module.exports = {
    listar,
    listarPorUsuario,
    curtirPostagem,
    publicar,
    editar,
    deletar
}