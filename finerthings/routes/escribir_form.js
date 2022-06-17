const express = require('express');
const router = express.Router();
const Libro = require('../models/libros')

router.route('/')
    .get(function(req, res, next){
        res.render('escribir_form.njk');
    })

    .post(function(req, res, next){
        let publicacionpic = req.files.fotoescribir;
        let uploadPath = process.cwd() + "/finerthings/public/img/" + req.body.title +".jpg";

        publicacionpic.mv(uploadPath, function (err){
            if (err) console.log(err)
        });

        const libro = new Libro();
        libro.photo = "/img/" + req.body.title + ".jpg";
        libro.title = req.body.title;
        libro.description = req.body.description;
        libro.author = req.user.username;
        libro.category = req.body.category;
        libro.language = req.body.language;
        libro.content = req.body.content;

        libro.save()

        res.redirect('/escribir');
    })

module.exports = router;