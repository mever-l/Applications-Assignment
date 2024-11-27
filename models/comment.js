const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    message: String,
    post: {
        type: mongoose.Types.ObjectId,
         ref: "Post"
    },
    uploadedBy: String,
    uploadedAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Comment', commentSchema);