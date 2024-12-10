import { Router } from 'express';
const usersController = require("../../controllers/users.controller");

const router = Router();

router.get('/', usersController.getAllUsers);
router.post('/', usersController.addPost);
router.get('/:id', usersController.getPostById);
router.get('/sender', usersController.getAllPosts);
router.put('/:id', usersController.updatePost);

module.exports = router;