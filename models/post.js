const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    photo: String,
    title: String,
    uploadedBy: String,
    description: String,
    uploadedAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Post', postSchema);