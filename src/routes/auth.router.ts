import e, { Router } from 'express';
import { login, register, refresh, logout } from '../controllers/auth.controller';

export const authRouter = Router();
authRouter.post('/login', login);
authRouter.post('/register', register);
authRouter.post("/refresh", refresh);
authRouter.post("/logout", logout);
