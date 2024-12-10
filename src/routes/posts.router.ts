import { Router } from 'express';
import { addPost, getAllPosts, getPostById, getPostsBySenderId, updatePost } from "../controllers/posts.controller";

export const postsRouter = Router();

postsRouter.get('/', getAllPosts);
postsRouter.post('/', addPost);
postsRouter.get('/:id', getPostById);
postsRouter.get('/sender', getAllPosts);
postsRouter.put('/:id', updatePost);
