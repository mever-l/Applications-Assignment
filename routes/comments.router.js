const express = require('express');
const router = express.Router();
const commentsController = require("../controllers/comments.controller");

router.post('/', commentsController.addComment);
router.post('/update/:id', commentsController.updateComment);
router.get('/:id', commentsController.getCommentById);
router.get('/', commentsController.getAllComments);
router.get('post/:postId', commentsController.getCommentsByPost)
router.post('/delete/:id', commentsController.deleteComment);

module.exports = router;