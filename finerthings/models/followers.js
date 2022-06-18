const mongoose = require('mongoose');
const { Schema } = mongoose;


const followSchema = new Schema({
    friend: String,
    email: String,
    user: String,
    photo: Array

});

const Follow = mongoose.model('Follow', followSchema);
module.exports = Follow;