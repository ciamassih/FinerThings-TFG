const express = require('express');
const router = express.Router();
const Favorite = require("../models/favorites");
const User = require("../models/user");
const passport = require('passport');
const flash = require('connect-flash');

router.route('/')

    .get(function(req, res, next){
            res.send("Hola")
        })


    .post(async function(req, res, next){
                let favoritos = req.user.favoritos
                if(req.body.librotitle in favoritos){
                        res.send("Error")
                }

                else {

                        const favorite = new Favorite();
                        favorite.author = req.body.libroauthor;
                        favorite.photo = req.body.librophoto;
                        favorite.title = req.body.librotitle;
                        favorite.description = req.body.librodescription;
                        favorite.user = req.user.username;


                        favorite.save()


                        user = await User.updateOne({username:req.user.username}, {$push:{favoritos:[req.body.librotitle]}})

                        res.redirect('/libros');
                }
        })

module.exports = router;