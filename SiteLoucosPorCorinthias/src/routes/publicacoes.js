var express = require("express");
var router = express.Router();
var upload = require('../config/configUpload2')
var publicacoesController = require("../controllers/publicacoesController");


router.get("/listar", function (req, res) {
    publicacoesController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    publicacoesController.listarPorUsuario(req, res);
});

router.post("/publicar/:idUsuario", upload.single('foto'), (req, res) =>{
    publicacoesController.publicar(req, res);
});

router.post("/curtir", function (req, res) {
    publicacoesController.curtirPostagem(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    publicacoesController.pesquisarDescricao(req, res);
});


router.put("/editar/:idAviso",  function (req, res) {
    publicacoesController.editar(req, res);
});

router.delete("/deletar/:idPostagens", function (req, res) {
    publicacoesController.deletar(req, res);
});

module.exports = router;