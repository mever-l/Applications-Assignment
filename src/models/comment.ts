import { Schema, model, Types } from "mongoose";

export const Comment =
    model(
        'Comment',
         new Schema({
            message: String,
            post: {
                type: Types.ObjectId,
                ref: "Post"
            },
            uploadedBy: {
                type: Types.ObjectId,
                ref: "User"
            },
            uploadedAt: {
                type: Date,
                default: Date.now()
            },
}));

