const express = require('express');
const router = express.Router();
const Favorite = require("../models/favorites");
const User = require("../models/user");
const Libro = require("../models/libros");


router.route('/')

    .get(async function(req, res, next){
        let favorites = await Favorite.find({user: req.user.username})
        res.render('libreria.njk', {favorites: favorites});
    })

    .post(async function (req, res){
        user = await User.updateOne({username:req.user.username}, {$pull:{favoritos:[req.body.favoritetitle]}})
        var query = {title: req.body.favoritetitle};

        favorite = await Favorite.deleteOne(query)
        res.redirect('/libreria');
        })


    router.route('/:id')
        .get(async function (req, res, next) {

            let favorito = await Favorite.findOne({_id: req.params.id})
            let librofav = await Libro.findOne({title: favorito.title})
            console.log(favorito.title)
            console.log(favorito)
            console.log(librofav)

            res.render('favorite_detailed.njk', {libro: librofav});


        });

module.exports = router;