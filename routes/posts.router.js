const express = require('express');
const router = express.Router();
const postsController = require("../controllers/posts.controller");

router.get('/', postsController.getAllPosts);
router.post('/', postsController.addPost);
router.get('/:id', postsController.getPostById);
router.get('/sender', postsController.getAllPosts);
router.put('/:id', postsController.updatePost);

module.exports = router;