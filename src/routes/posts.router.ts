import { Router } from 'express';
import  postsController  from "../controllers/posts.controller";
import { authMiddleware } from '../controllers/auth.controller';

export const postsRouter = Router();

postsRouter.get('/', postsController.getAllItems.bind(postsController));
postsRouter.post('/', authMiddleware, postsController.addItem.bind(postsController));
postsRouter.get('/:id', postsController.getItemById.bind(postsController));
postsRouter.get('/uploader', authMiddleware, postsController.getAllItems.bind(postsController));
postsRouter.put('/:id',authMiddleware, postsController.updateItem.bind(postsController));
postsRouter.delete('/:id',authMiddleware, postsController.deleteItem.bind(postsController));
