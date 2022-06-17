const express = require('express');
const router = express.Router();
const Favorite = require("../models/favorites");
const User = require("../models/user");


router.route('/')

    .get(async function(req, res, next){
        let favorites = await Favorite.find({user: req.user.username})
        res.render('libreria.njk', {favorites: favorites});
    })

    .post(async function (req, res){
        user = await User.updateOne({username:req.user.username}, {$pull:{favoritos:[req.body.favoritetitle]}})
        var query = {title: req.body.favoritetitle};

        favorite = await Favorite.remove(query)
        res.redirect('/libreria');
        }

    )

module.exports = router;