const Post = require('../models/post')

const getAllPosts = async (req, res) => {
    try {
        if(req.query.sender) {
            getPostsBySenderId(req, res);
        } else {
        const posts = await Post.find();
        res.status(200).send(posts);
    }
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
}

const addPost = async (req, res) => {
    try {
        const newPost = Post({
            photo: req.body.photo,
            title: req.body.title,
            uploadedBy: req.body.uploadedBy,
            description: req.body.description,
            uploadedAt: req.body.uploadedAt
        });
        await Post.create(newPost);
        res.status(200).send('Your post has been created successfully :P');
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
}

const getPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const postById = await Post.findById(id);
        res.status(200).send(postById);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
}

const getPostsBySenderId = async (req, res) => {
    try {
        const postsBySenderId = await Post.find({'uploadedBy': req.query.sender})
        res.status(200).send(postsBySenderId);
    }   catch (err) {
        res.status(400).json({ error: err.message});
    }
}

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const newPost = Post ({
            _id: postId,
            photo: req.body.photo,
            title: req.body.title,
            uploadedBy: req.body.uploadedBy,
            description: req.body.description,
            uploadedAt: req.body.uploadedAt,
        });
        await Post.findByIdAndUpdate(postId, newPost);
        res.status(200).send('Your post has been updated successfully :P');
    }   catch (err) {
        res.status(400).json({ error: err.message});
    }
}


module.exports = {
    getAllPosts,
    addPost,
    getPostById,
    getPostsBySenderId,
    updatePost
}