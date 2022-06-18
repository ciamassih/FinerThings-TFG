const express = require('express');
const router = express.Router();
const Libro = require("../models/libros");
const passport = require('passport');
const User = require("../models/user")
const ObjectId = require("mongoose").Types.ObjectId

router.route('/')
    .get(async function (req, res, next) {
        let libros = await Libro.find({category: "Misterio"})
        console.log(req.user.favoritos)
        res.render('misterio.njk', {libros: libros});

    });

router.route('/:id')
    .get(function(req, res, next){
        Libro.findById(req.params.id, function (err, libro){
            if (err) return console.log(err);
            res.render('libro_detailed.njk', {libro: libro});
        } )

    });

module.exports = router;