const express = require('express');
const router = express.Router();
const Libro = require("../models/libros");


router.route('/')
    .post(async function(req, res, next){
        let value = req.body.librotitle
        value = value.trim().toLowerCase()

        let libros = await Libro.find({category: "Horror", "titlesearch": {"$regex": value, "$options": "i"}})
        res.render('get_libros_horror.njk', {libros: libros});
    })


module.exports = router;