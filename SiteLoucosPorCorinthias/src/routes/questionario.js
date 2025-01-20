var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.get("/:idUsuario", function (req, res) {
  questionarioController.buscarQuestionariosPorId(req, res);
});

router.post("/cadastrar", function (req, res) {
  questionarioController.cadastrar(req, res);
})

router.get("/:idUsuario", function (req, res) {
  questionarioController.buscarQuestionariosPorId(req, res);
});



router.post("/mediaDeErrosQuestionario",function(req,res){
  questionarioController.buscarMediaDeErrosPorQuestionario(req,res)
})

router.post("/acertosPorQuestionario",function(req,res){
  questionarioController.buscarMediaDeAcertosPorQuestionario(req,res)
})
module.exports = router;