import { Router } from 'express';
import { commentsController } from '../controllers/comments.controller';
import { authMiddleware } from '../controllers/auth.controller';

export const commentsRouter = Router();

/**
* @swagger
* tags:
*   name: Comment
*   description: The Comments API
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - message
 *         - post
 *         - uploadedBy
 *       properties:
 *         message:
 *           type: string
 *           description: The content of the comment
 *         post:
 *           type: string
 *           description: The ID of the post the comment belongs to
 *         uploadedBy:
 *           type: string
 *           description: The ID of the user who uploaded the comment
 *       example:
 *         message: "Test Comment"
 *         post: "6766ba578512b96e0948f8f3"
 *         uploadedBy: "6766b07ed176ee0ca0ea6105"
 */

/**
 * @swagger
 * paths:
 *   /comment:
 *     get:
 *       summary: Get all comments
 *       tags: [Comment]
 *       security:
 *         - bearerAuth: []
 *       description: Returns a list of all comments
 *       responses:
 *         200:
 *           description: A list of comments
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Comment'
 *     post:
 *       summary: Create a new comment
 *       tags: [Comment]
 *       description: Creates a new comment in the database
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       responses:
 *         201:
 *           description: Comment created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Comment'
 *         401:
 *           description: Unauthorized
 *   /comment/update/{id}:
 *     put:
 *       summary: Updates a comment
 *       tags: [Comment]
 *       security:
 *         - bearerAuth: []
 *       description: updates a specific comment with new values
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the comment to update
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       responses:
 *         200:
 *           description: updated comment
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Comment'
 *         404:
 *           description: Comment not found
 *   /comment/{id}:
 *     get:
 *       summary: Get a specific comment by ID
 *       tags: [Comment]
 *       security:
 *         - bearerAuth: []
 *       description: Retrieves a comment by its unique ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the comment to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: A single comment
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Comment'
 *         404:
 *           description: Comment not found
 *   /comment/delete/{id}:
 *     delete:
 *       summary: Delete a specific comment
 *       tags: [Comment]
 *       description: Deletes a comment by its ID
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the comment to delete
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: Comment deleted successfully
 *         404:
 *           description: Comment not found
 *   /comment?uploader={uploaderId}:
 *     get:
 *       summary: Get comments by uploader
 *       tags: [Comment]
 *       security:
 *         - bearerAuth: []
 *       description: Returns a list of comments uploaded by a specific user
 *       parameters:
 *         - in: query
 *           name: uploader
 *           required: true
 *           description: The ID of the user who uploaded the comments
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: A list of comments uploaded by the specified user
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Comment'
 *         404:
 *           description: No comments found for the given uploader
 *   /comment?postId={postId}:
 *     get:
 *       summary: Get comments by post
 *       tags: [Comment]
 *       security:
 *         - bearerAuth: []
 *       description: Returns a list of comments uploaded on a specific post
 *       parameters:
 *         - in: query
 *           name: postId
 *           required: true
 *           description: The ID of the post of the comments
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: A list of comments uploaded on a specific post
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Comment'
 *         404:
 *           description: No comments found for the given post
 */

commentsRouter.post('/', authMiddleware, commentsController.addItem.bind(commentsController));
commentsRouter.put('/update/:id', authMiddleware, commentsController.updateItem.bind(commentsController));
commentsRouter.get('/:id', authMiddleware, commentsController.getItemById.bind(commentsController));
commentsRouter.get('/', authMiddleware, commentsController.getAllItems.bind(commentsController));
commentsRouter.get('/postId', authMiddleware, commentsController.getAllItems.bind(commentsController));
commentsRouter.delete('/delete/:id', authMiddleware, commentsController.deleteItem.bind(commentsController));
commentsRouter.get('/uploader', authMiddleware, commentsController.getAllItems.bind(commentsController));