import { Schema, model } from "mongoose";

export const Post =
    model(
        'post',
         new Schema({
            photo: String,
            title: String,
            uploadedBy: String,
            description: String,
            uploadedAt: {
                type: Date,
                default: Date.now()
            },
}));