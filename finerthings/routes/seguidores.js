const express = require('express');
const router = express.Router();
const User = require("../models/user");
const passport = require('passport');
const Libro = require("../models/libros");


router.route('/')

    .get(async function(req, res, next){
        let user = await User.findOne({username: req.user.username})
        let followings = user.followers

        let followingusers = []
        for (following of followings) {

            let aux = await User.findOne({username:following})
            followingusers.push(aux)

        }
        res.render('seguidores.njk', {follows: followingusers});
    })

    .post(async function(req, res, next){
        let libros = await Libro.find({author:req.body.friendusername})
        console.log(req.body.friendusername)
        res.render('seguidores_publicaciones.njk', {libros: libros});
    })


module.exports = router;