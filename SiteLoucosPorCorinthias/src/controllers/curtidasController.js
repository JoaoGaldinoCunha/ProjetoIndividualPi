const { json } = require("express");
var curtidasModel = require("../models/curtidasModel");

function buscarCurtidasPorIdDoUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  curtidasModel.buscarCurtidasPorIdDoUsuario(idUsuario).then((resultado) => {
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

function listar(req, res) {
  curtidasModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  curtidasModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  curtidasModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      curtidasModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarCurtidasPorIdDoUsuario,
  buscarPorId,
  cadastrar,
  listar,
};
