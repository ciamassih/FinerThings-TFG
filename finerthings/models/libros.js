const mongoose = require('mongoose')
const { Schema } = mongoose;


const libroSchema = new Schema({
    photo: Array,
    title: String,
    author: String,
    description: String,
    category: String,
    content: String,
    language: String,
});

module.exports = mongoose.model('libro', libroSchema)