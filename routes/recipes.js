var recipes = require('../recipes.json');
var router = require('express').Router();



router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send('All Good');
  });

module.exports = router;

