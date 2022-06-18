const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Libro = require("../models/libros");


router.route('/')

    .get(async function(req, res, next){
        let user = await User.findOne({user: req.user.username})
        console.log("User")
        console.log(user)
        let followers = user.following
        console.log("followers")
        console.log(followers)
        let followerusers = []
        for (follower of followers) {
            console.log("follower")
            console.log(follower)
            let aux = await User.findOne({username:follower})
            console.log("aux")
            console.log(aux)
            followerusers.push(aux)

        }
        console.log("followerusers")
        console.log(followerusers)
        res.render('amigos.njk', {follows: followerusers});
    })

    .post(async function (req, res){
        user = await User.updateOne({username:req.user.username}, {$pull:{follows:[req.body.followfriend]}})
        console.log(req.body.followfriend)
        res.redirect('/amigos');
        })


module.exports = router;