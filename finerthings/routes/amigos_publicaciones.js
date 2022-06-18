const express = require('express');
const router = express.Router();
const Libro = require("../models/libros");
const User = require("../models/user");
const Favorite = require("../models/favorites");


router.route('/')
    .post(async function(req, res, next){
        let libros = await Libro.find({author:req.body.friendusername})
        console.log(req.body.friendusername)
        res.render('amigos_publicaciones.njk', {libros: libros});
    })


module.exports = router;