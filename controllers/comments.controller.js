const Comment = require('../models/comment')

const addComment = async (req, res) => {
    try {
        const newComment = Comment({
            ...req.body
        })
        await Comment.create(newComment)
        res.sendStatus(400);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const updateComment = async (req, res) => {
    try {
        const newComment = Comment({
            ...req.body
        });
        await Comment.findOneAndUpdate(newComment);
        res.sendStatus(400);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const getCommentsByPost = async (req, res) => {
    try {
        const comments = Comment.find({ post: req.params.postId });
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await Comment.deleteOne({ id });
        res.status(200).send(comment)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const getCommentById = async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findById(id);
        res.status(200).send(comment)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).send(comments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getAllComments,
    addComment: addComment,
    getCommentsByPost,
    deleteComment,
    getCommentById,
    updateComment
}