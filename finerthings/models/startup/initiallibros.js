Libros = require('../libros')
require('../../database');

async function initDB() {
    try{
        await Libros.collection.drop();
    } catch (e){
        console.log("Collection didn't exist, will be created.")
    }

    const initLibros = [
        {
            photo: "/img/libro1.png",
            title: "Ejemplo 1",
            titlesearch: "ejemplo 1",
            author: "admin",
            description: ".",
            category: "Romance",
            language: "Inglés",
            content: "Ejemplo",
        },
        {
            photo: "/img/libro2.png",
            title: "La biblioteca de medianoche",
            titlesearch: "la biblioteca de medianoche",
            author: "admin",
            description: ".",
            category: "Ficción",
            language: "Español",
            content: "Ejemplo",
        }
    ];

    await Libros.insertMany(initLibros)
}
Promise.all([

    initDB()

]).then(process.exit);

