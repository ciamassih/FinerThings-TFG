var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res, next){
      res.render('index.njk');
    });

module.exports = router;