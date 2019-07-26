var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("poo", { title: "Poo Page of Boredom" });
});

module.exports = router;
