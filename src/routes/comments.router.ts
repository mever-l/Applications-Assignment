import { Router } from 'express';
import { commentsController } from '../controllers/comments.controller';
import { authMiddleware } from '../controllers/auth.controller';

export const commentsRouter = Router();

commentsRouter.post('/', authMiddleware, commentsController.addItem.bind(commentsController));
commentsRouter.put('/update/:id', authMiddleware, commentsController.updateItem.bind(commentsController));
commentsRouter.get('/:id', commentsController.getItemById.bind(commentsController));
commentsRouter.get('/', commentsController.getAllItems.bind(commentsController));
commentsRouter.get('/postId', authMiddleware, commentsController.getAllItems.bind(commentsController));
commentsRouter.delete('/delete/:id', authMiddleware, commentsController.deleteItem.bind(commentsController));
commentsRouter.get('/uploader', commentsController.getAllItems.bind(commentsController));