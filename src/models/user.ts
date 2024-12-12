import mongoose from "mongoose";

export interface User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}

const userSchema = new mongoose.Schema<User>({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
});

export const userModel = mongoose.model<User>("User", userSchema);