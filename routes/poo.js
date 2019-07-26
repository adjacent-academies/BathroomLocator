var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('poo', { title: 'the poo index of america. also rich guys send me 10k yeet on this shit ' });
});


module.exports = router;
