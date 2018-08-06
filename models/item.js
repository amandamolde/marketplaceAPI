const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    photos: [],
});

module.exports = mongoose.model('item', itemSchema);