var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_75/index', { name: 'Ray', id: '211417075' });
});

module.exports = router;
