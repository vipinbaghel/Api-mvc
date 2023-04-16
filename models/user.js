import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

export const User = mongoose.model("user", userShema)