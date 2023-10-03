import mongoose from "mongoose";

const User = new mongoose.Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, unique: true, require: true},
    name: {type: String},
    surname: {type: String},
    image: {type: String},
    description: {type: String},
    likedPosts: [{type: String}, {default: []}]
})

export default mongoose.model('User', User)