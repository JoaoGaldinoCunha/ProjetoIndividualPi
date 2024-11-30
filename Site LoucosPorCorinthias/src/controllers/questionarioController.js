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



function buscarMediaDeAcertosPorQuestionario(req, res) {
  var idUsuario = req.body.idUsuario;

  questionario.buscarMediaDeAcertosPorQuestionario(idUsuario).then((resultado) => {
    if(resultado.length>0){
      res.status(200).json(resultado)
    }else{
      res.status(404).json(resultado)
    }
  }).catch(function(error){
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);  });
}


function buscarMediaDeErrosPorQuestionario(req, res) {
  var idUsuario = req.body.idUsuario;

  questionario.buscarMediaDeErrosPorQuestionario(idUsuario).then((resultado) => {
    if(resultado.length>0){
      res.status(200).json(resultado)
    }else{
      res.status(404).json(resultado)
    }
  }).catch(function(error){
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);  });
}


module.exports = {
  buscarMediaDeErrosPorQuestionario,
  buscarMediaDeAcertosPorQuestionario,
  buscarQuestionariosPorId,
  cadastrar
}