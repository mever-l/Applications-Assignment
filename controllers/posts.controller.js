const mongoose = require('mongoose');
const Post = monngoose.model('Post', postSchema)

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
}

const addPost = async (req, res) => {
    try {
        const newPost = Post ({
            photo: req.body.photo,
            title: req.body.title,
            uploadedBy: req.body.uploadedBy,
            description: req.body.description,
            uploadedAt: req.body.uploadedAt
        });
        await Post.save(newPost);
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
}


module.exports = {
    getAllPosts,
    addPost
}