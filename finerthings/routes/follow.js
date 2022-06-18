const express = require('express');
const router = express.Router();
const Favorite = require("../models/favorites");
const Follow = require("../models/followers");
const User = require("../models/user");
const passport = require('passport');
const flash = require('connect-flash');

router.route('/')

    .get(function(req, res, next){
            res.send("Hola")
        })


    .post(async function(req, res, next){
                let followers = req.user.followers
                if(req.user.username in followers){
                        res.send("Error")
                }

                else {

                        const follow = new Follow();
                        follow.friend = req.body.userusername;
                        follow.photo = req.body.userphoto;
                        follow.email = req.body.useremail;
                        follow.user = req.user.username;


                        follow.save()


                        user = await User.updateOne({username:req.user.username}, {$push:{followers:[req.body.userusername]}})

                        res.redirect('/comunidad');
                }
        })

module.exports = router;