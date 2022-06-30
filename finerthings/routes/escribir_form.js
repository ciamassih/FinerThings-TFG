const express = require('express');
const router = express.Router();
const Libro = require('../models/libros')
let alert = require('alert');

router.route('/')
    .get(function(req, res, next){
        res.render('escribir_form.njk');
    })

    .post(async function (req, res, next) {
        let titlesearch = req.body.title;
        titlesearch = titlesearch.trim().toLowerCase();

        const existCheck = await Libro.findOne({titlesearch: titlesearch});

        if (existCheck) { //si existe la publicación manda un error
            alert("¡Publicación existe! Por favor, introduce otro título.")

        } else {
            let publicacionpic = req.files.fotoescribir;
            let uploadPath = process.cwd() + "/public/img/" + req.body.title + ".jpg";

            publicacionpic.mv(uploadPath, function (err) {
                if (err) console.log(err)
            });

            let value = req.body.title;
            value = value.trim().toLowerCase();


            const libro = new Libro();
            libro.photo = "/img/" + req.body.title + ".jpg";
            libro.title = req.body.title;
            libro.titlesearch = value;
            libro.description = req.body.description;
            libro.author = req.user.username;
            libro.category = req.body.category;
            libro.language = req.body.language;
            libro.content = req.body.content;

            libro.save()

            res.redirect('/escribir');
        }
    })

module.exports = router;