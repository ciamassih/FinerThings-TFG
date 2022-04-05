const express = require('express');
const router = express.Router();
const passport = require('passport');

router.route('/')
    .get(function(req, res, next){
        res.render('login.njk')
    })
    .post(passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        passReqToCallback: true
    }));

module.exports = router;