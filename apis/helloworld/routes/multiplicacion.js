var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  var total = a + b;
  res.send({ message: "hola desde multiplicacion", total: total });
});

module.exports = router;