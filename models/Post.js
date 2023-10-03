import mongoose from "mongoose";

const Post = new mongoose.Schema({
    userId: {type: String, ref: 'User', require: true},
    images: [{type: String, require: true}],
    description: {type: String},
    likes: {type: Number, default: 0}
})

export default mongoose.model('Post', Post)