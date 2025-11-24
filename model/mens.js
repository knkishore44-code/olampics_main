const mongoose = require('mongoose');

const mensrankingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('MensRanking', mensrankingSchema);

//new changes