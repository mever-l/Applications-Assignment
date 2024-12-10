import { Request, Response } from "express";
import { Post } from "../models/post";

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        if(req.query.sender) {
            getPostsBySenderId(req, res);
        } else {
        const posts = await Post.find();
        res.status(200).send(posts);
    }
    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const addPost = async (req: Request, res: Response) => {
    try {
        const newPost = new Post({
            photo: req.body.photo,
            title: req.body.title,
            uploadedBy: req.body.uploadedBy,
            description: req.body.description,
            uploadedAt: req.body.uploadedAt
        });
        await Post.create(newPost);
        res.status(200).send('Your post has been created successfully :P');
    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const getPostById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const postById = await Post.findById(id);
        res.status(200).send(postById);
    } catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const getPostsBySenderId = async (req: Request, res: Response) => {
    try {
        const postsBySenderId = await Post.find({'uploadedBy': req.query.sender})
        res.status(200).send(postsBySenderId);
    }   catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        const postId = req.params.id;
        const newPost = new Post({
            _id: postId,
            photo: req.body.photo,
            title: req.body.title,
            uploadedBy: req.body.uploadedBy,
            description: req.body.description,
            uploadedAt: req.body.uploadedAt,
        });
        await Post.findByIdAndUpdate(postId, newPost);
        res.status(200).send('Your post has been updated successfully :P');
    }   catch (err: any) {
        res.status(500).json({ error: err.message});
    }
}