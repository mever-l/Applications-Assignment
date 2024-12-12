import { Schema, Types, model } from "mongoose";

export const Post =
    model(
        'Post',
         new Schema({
            photo: String,
            title: String,
            uploadedBy: {
                type: Types.ObjectId,
                ref: "User"
            },
            description: String,
            uploadedAt: {
                type: Date,
                default: Date.now()
            },
}));