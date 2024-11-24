var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post('/cadastro', upload.single('foto'), (req, res) => {
    usuarioController.salvar(req, res);
  });

router.get('/buscar/:idUsuario',function (req,res){
  usuarioController.buscarUsuarioPorId(req,res);
})


router.put('/atualizar',  (req, res) => {
  usuarioController.atualizarDados(req, res);
});
module.exports = router;
