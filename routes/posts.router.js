const express = require('express'); 
const router = express.Router();
const postsController = require("../controllers/posts.controller");

router.get('/', postsController.getAllPosts);
router.post('/', postsController.addPost);

module.exports = router;