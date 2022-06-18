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
                let following = req.user.following
                if(req.body.friendusername in following){
                        res.send("Error")
                }

                else {

                        user = await User.updateOne({username:req.user.username}, {$push:{following:req.body.friendusername}})
                        console.log(req.body.friendusername)

                        res.redirect('/comunidad');
                }
        })

module.exports = router;