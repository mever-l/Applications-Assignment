const express = require('express');
const router = express.Router();
const commentsController = require("../controllers/comments.controller");

router.post('/', commentsController.addComment);
router.put('/update/:id', commentsController.updateComment);
router.get('/:id', commentsController.getCommentById);
router.get('/', commentsController.getAllComments);
router.get('/postId', commentsController.getAllComments)
router.delete('/delete/:id', commentsController.deleteComment);

module.exports = router;