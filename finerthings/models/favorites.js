const mongoose = require('mongoose');
const { Schema } = mongoose;


const favoriteSchema = new Schema({
    author: String,
    title: String,
    user: String,
    photo: Array,
    description: String
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;