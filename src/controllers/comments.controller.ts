import { Comment } from "../models/comment";
import { Request, Response } from "express";

export const addComment = async (req: Request, res: Response) => {
    try {
        const newComment = new Comment({
            message: req.body.message,
            post: req.body.post,
            uploadedBy: req.body.uploadedBy,
            uploadedAt: req.body.uploadedAt
        })
        await Comment.create(newComment)
        res.sendStatus(200);
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

export const updateComment = async (req: Request, res: Response) => {
    try {
        const commentId = req.params.id;
        const newComment = new Comment({
            _id: commentId,
            message: req.body.message,
        });
        await Comment.findByIdAndUpdate(commentId, newComment);
        res.sendStatus(200);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getCommentsByPost = async (req: Request, res: Response) => {
    try {
        const postId = req.query.postId;
        const comments = await Comment.find({ 'post': postId });
        res.status(200).send(comments);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteComment = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findByIdAndDelete(id);
        res.status(200).send(comment)
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getCommentById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const comment = await Comment.findById(id);
        res.status(200).send(comment)
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllComments = async (req: Request, res: Response) => {
    try {
        if(req.query.postId) {
           getCommentsByPost(req, res);
        } else {
        const comments = await Comment.find();
        res.status(200).send(comments);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}