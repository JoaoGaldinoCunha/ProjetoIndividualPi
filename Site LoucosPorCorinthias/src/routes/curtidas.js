var express = require("express");
var router = express.Router();

var curtidasController = require("../controllers/curtidasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    curtidasController.cadastrar(req, res);
})

router.get("/:idUsuario", function (req, res) {
  curtidasController.buscarCurtidasPorIdDoUsuario(req, res);
});

router.get("/buscar/:id", function (req, res) {
  curtidasController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  curtidasController.listar(req, res);
});

router.post("/mediaCurtidas",function(req,res){
  curtidasController.buscarMediaDeCurtidas(req,res)
})

router.post("/maiorPostagemCurtidas",function(req,res){
  curtidasController.buscarMaiorPostagemComCurtida(req,res)
})
module.exports = router;