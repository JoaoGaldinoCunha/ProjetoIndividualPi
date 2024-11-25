var questionario = require("../models/questionario");

function buscarQuestionariosPorId(req, res) {
  var idUsuario = req.params.idUsuario;

  questionario.buscarQuestionariosPorId(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var qtdDeAcertos = req.body.qtdAcertosServer;
  var idUsuario = req.body.idUsuarioServer;

  if (qtdDeAcertos == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    questionario.cadastrar(qtdDeAcertos, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
   buscarQuestionariosPorId,
  cadastrar
}