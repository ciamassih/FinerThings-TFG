const express = require('express');
const router = express.Router();
const User = require("../models/user");
const passport = require('passport');


router.route('/')

    .get(async function(req, res, next){
        let user = await User.findOne({username: req.user.username})
        let followers = user.following

        let followerusers = []
        for (follower of followers) {

            let aux = await User.findOne({username:follower})
            followerusers.push(aux)

        }
        res.render('amigos.njk', {follows: followerusers});
    })

    .post(async function (req, res){
        user = await User.updateOne({username:req.user.username}, {$pull:{following:req.body.friendusername}})
        user = await User.updateOne({username:req.body.friendusername}, {$pull:{followers:req.user.username}})
        res.redirect('/amigos');
        })


module.exports = router;