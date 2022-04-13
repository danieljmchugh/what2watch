const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: true
    },
    content: {
        type: [Number],
        default: undefined, 
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const List = mongoose.model('List', listSchema);

module.exports = List;
