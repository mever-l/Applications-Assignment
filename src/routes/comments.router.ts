import { Router } from 'express';
import { addComment, deleteComment, getAllComments, getCommentById, getCommentsByPost, updateComment } from "../controllers/comments.controller"

export const commentsRouter = Router();

commentsRouter.post('/', addComment);
commentsRouter.put('/update/:id', updateComment);
commentsRouter.get('/:id', getCommentById);
commentsRouter.get('/', getAllComments);
commentsRouter.get('/postId', getAllComments)
commentsRouter.delete('/delete/:id', deleteComment);