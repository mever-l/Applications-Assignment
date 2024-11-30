const Comment = require('../models/comment')


const addComment = async (req, res) => {
    try {
        const newComment = Comment({
            message: req.body.message,
            post: req.body.post,
            uploadedBy: req.body.uploadedBy,
            uploadedAt: req.body.uploadedAt
        })
        await Comment.create(newComment)
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const newComment = Comment({
            _id: commentId,
            message: req.body.message,
        });
        await Comment.findByIdAndUpdate(commentId, newComment);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommentsByPost = async (req, res) => {
    try {
        const postId = req.query.postId;
        const comments = await Comment.find({ 'post': postId });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findByIdAndDelete(id);
        res.status(200).send(comment)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findById(id);
        res.status(200).send(comment)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllComments = async (req, res) => {
    try {
        if(req.query.postId) {
           getCommentsByPost(req, res);
        } else {
        const comments = await Comment.find();
        res.status(200).send(comments);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllComments,
    addComment,
    getCommentsByPost,
    deleteComment,
    getCommentById,
    updateComment
}