import { Router } from 'express';
import { login, logout, register, updateUser } from '../controllers/users.controller';

export const usersRouter = Router();

usersRouter.post('/login', login);
usersRouter.post('/register', register);
usersRouter.put('/update', updateUser);
usersRouter.get('/logout', logout);