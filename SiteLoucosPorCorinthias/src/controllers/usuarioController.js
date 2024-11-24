var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    
                        // Removido a chamada à função 'buscarPostagensPorId'
                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            nome: resultadoAutenticar[0].nome,
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                    
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function salvar(req, res) {
    
    const imagem = req.file.filename;
    const {nome, email,senha,cpf} = req.body
    const usuario = { nome, email,senha,cpf, imagem }
    
    usuarioModel.salvar(usuario)
    .then(resultado => {
      res.status(201).send("Usuario criado com sucesso");
    }).catch(err => {
      res.status(500).send(err);
    });
  }

  function buscarUsuarioPorId(req,res){
    const idUsuario = req.params.idUsuario;

    usuarioModel.buscarUsuarioPorId(idUsuario)
    .then(resultado => {
        res.status(200).json(resultado);
    }).catch(err => {
        res.status(500).send(err);
      });
  }

    function atualizarDados(req, res) {
        var nome = req.body.nomeServer;
        var email = req.body.emailServer;
        var senha = req.body.senhaServer;
        var idUsuario = req.body.idUsuarioServer;
        var cpf = req.body.cpfServer;

        if (nome == undefined) {
            res.status(400).send("Seu nome está undefined!");
        } else if (email == undefined) {
            res.status(400).send("Seu email está undefined!");
        } else if (senha == undefined) {
            res.status(400).send("Sua senha está undefined!");
        } else if (idUsuario == undefined) {
            res.status(400).send("Sua empresa a vincular está undefined!");
        } else {
    
            usuarioModel.atualizarDadosPerfil(nome, email, senha, idUsuario,cpf)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }
    }

module.exports = {
    autenticar,
    salvar,
    buscarUsuarioPorId,
    atualizarDados
}