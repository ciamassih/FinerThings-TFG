const express = require('express');
const router = express.Router();
const Libro = require("../models/libros");
const User = require("../models/user");
const Favorite = require("../models/favorites");

router.route('/')
    .get(async function (req, res, next) {
        let libros = await Libro.find({})
        res.render('admin_libros.njk', {libros: libros});

    })

    .post(async function (req, res){
        var query = {title: req.body.librotitle};
        libro = await Libro.deleteOne(query)
        user = await User.updateMany({$pull:{favoritos:[req.body.librotitle]}})
        favorite = await Favorite.deleteMany(query)

        res.redirect('/admin_libros');
    });


module.exports = router;