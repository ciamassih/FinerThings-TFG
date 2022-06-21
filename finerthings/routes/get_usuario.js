const express = require('express');
const router = express.Router();
const User = require("../models/user");


router.route('/')
    .post(async function(req, res, next){
        let value = req.body.friendusername
        value = value.trim().toLowerCase()

        let users = await User.find({usernamesearch: value})
        console.log(users)
        res.render('get_usuario.njk', {users: users});
    })


module.exports = router;