const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect('mongodb://db:27017/finerthings', {useNewUrlParser: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.error(err));