const express = require('express');
const router = express.Router();

router.route('/')
    .get(function(req, res, next){
        res.render('escribir.njk');
    });

module.exports = router;