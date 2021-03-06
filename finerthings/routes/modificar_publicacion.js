const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Libro = require("../models/libros");
const Favorite = require("../models/favorites");
const alert = require("alert");

router.route('/')

    .get(function(req, res, next){
            let photo = req.query.librophoto;
            let title = req.query.librotitle;
            let description = req.query.librodescription;
            let content = req.query.librocontent;

            res.render('modificar_publicacion.njk', {photo:photo, title: title, description: description, content: content});
    })


    .post(async function(req, res, next){
            let value = req.body.title;
            value = value.trim().toLowerCase();

            let title = req.body.librotitle;
            var query = {title: req.body.librotitle};
            favorite = await Favorite.deleteMany(query)
            user = await User.updateMany({$pull:{favoritos:[title]}})


            const modificarLibro = await Libro.findOne({title: title});

            let titlesearch = req.body.title;
            titlesearch = titlesearch.trim().toLowerCase();

            const existCheck = await Libro.findOne({titlesearch: titlesearch});

            if (existCheck) { //si existe la publicación manda un error
                alert("¡Publicación existe! Por favor, introduce otro título.")

            } else {

                let publicacionpic = req.files.fotoescribir;
                let uploadPath = process.cwd() + "/public/img/" + req.body.title +".jpg";

                publicacionpic.mv(uploadPath, function (err){
                    if (err) console.log(err)
                });

            modificarLibro.photo = "/img/" + req.body.title + ".jpg";
            modificarLibro.title = req.body.title;
            modificarLibro.titlesearch = value;
            modificarLibro.description = req.body.description;
            modificarLibro.author = req.user.username;
            modificarLibro.category = req.body.category;
            modificarLibro.language = req.body.language;
            modificarLibro.content = req.body.content;
            modificarLibro.save()

            res.redirect('/escribir');

    }})

module.exports = router;