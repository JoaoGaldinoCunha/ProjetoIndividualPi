var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/QuestionarioController");

router.get("/:idUsuario", function (req, res) {
  questionarioController.buscarQuestionariosPorId(req, res);
});

router.post("/cadastrar", function (req, res) {
  questionarioController.cadastrar(req, res);
})

module.exports = router;