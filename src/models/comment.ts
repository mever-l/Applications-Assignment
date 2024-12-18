import mongoose, { Types } from "mongoose";
import { Post } from "./post";
import { User } from "./user";

export interface Comment {
    message: string;
    post: Post;
    uploadedBy: User;
    uploadedAt: Date;
}

const commentScema = new mongoose.Schema<Comment>({
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
 })

 export const commentModel = mongoose.model<Comment>("Comment", commentScema);
