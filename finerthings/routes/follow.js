const express = require('express');
const router = express.Router();
const User = require("../models/user");
const passport = require('passport');

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
                        user = await User.updateOne({username:req.body.friendusername}, {$push:{followers:req.user.username}})
                        console.log(req.body.friendusername)

                        res.redirect('/comunidad');
                }
        })

module.exports = router;