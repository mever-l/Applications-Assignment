import { Schema, model } from "mongoose";

export const User =
    model(
        'User',
         new Schema({
            username: String,
            password: String,
            firstName: String,
            lastName: String,
            email: String,
}));