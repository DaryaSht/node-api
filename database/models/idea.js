const mongoose = require('mongoose');

const ideaShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: false,
    },
    description: {
        type: String,
        required: false,
        trim: false,
    }
});

const Idea = mongoose.model('Idea', ideaShema);

module.exports = Idea;