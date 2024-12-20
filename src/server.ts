import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { commentsRouter } from "./routes/comments.router";
import { postsRouter } from "./routes/posts.router";
import { usersRouter } from "./routes/users.router";

export const app = express();
dotenv.config();

mongoose.connect(process.env.DB_URL ?? "");
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Mongo :)'));

app.use(bodyParser.urlencoded({extended: true, limit:'1mb'}));
app.use(bodyParser.json());

app.use('/post', postsRouter);
app.use('/comment', commentsRouter);
app.use('/user', usersRouter);