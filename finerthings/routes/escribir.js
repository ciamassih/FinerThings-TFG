const express = require('express');
const router = express.Router();
const Libro = require("../models/libros");
const User = require("../models/user");
const Favorite = require("../models/favorites");


router.route('/')
    .get(async function(req, res, next){
        let libros = await Libro.find({author: req.user.username})
        res.render('escribir.njk', {libros: libros});
    })

    .post(async function (req, res){
        var query = {title: req.body.librotitle};
        libro = await Libro.deleteOne(query)
        user = await User.updateMany({$pull:{favoritos:[req.body.librotitle]}})
        favorite = await Favorite.deleteMany(query)

        res.redirect('/escribir');
    })

    router.route('/:id')
        .get(function(req, res, next){
            Libro.findById(req.params.id, function (err, libro){
                if (err) return console.log(err);
                res.render('libro_detailed.njk', {libro: libro});
            } )

        });

module.exports = router;