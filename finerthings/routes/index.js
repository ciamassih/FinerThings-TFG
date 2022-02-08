var express = require('express');
var router = express.Router();

router.get('/', async  function(req, res, next) {
  let  data = {
    message: 'TFG Cristina Abdul Massih: finer things',
    layout:  'layout.njk',
    title: 'Esqueleto app'
  }

  res.render('index.njk', data)
})

module.exports = router;
