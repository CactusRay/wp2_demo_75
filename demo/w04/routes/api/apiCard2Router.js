var express = require('express');
var router = express.Router();

const db = require('../../utils/database')

/* GET home page. */
router.get('/', async function (req, res, next) {

  try {
    const results = await db.query(`select * from card_75`);
    // console.log('json data =======>', JSON.stringify(results.rows));
    // res.render('card2_75/index', { data: results.rows, name: 'Ray', id: '214417075' });
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
