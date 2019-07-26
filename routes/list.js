var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('list', { title: 'List View for the Bathroom Mapper' });
});

router.get('/chicken', function(req, res, next) {
  res.render('test', { layout: false });
});

module.exports = router;
