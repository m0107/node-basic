var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send('All Good');
});


module.exports = router;
