import Post from "../models/Post.js"

class postServices {
    async getAll() {
        const posts = await Post.find()
        return posts
    }
    async getOne(id) {
        if (!id) {
            throw new Error('Не указан Id поста!')
        }
        const post = await Post.findById(id)
        return post
    }
    async create(userId, images, description) {
        if (!userId) {
            throw new Error('Не указан Id пользователя!')
        }
        const post = await Post.create({
            userId,
            images,
            description
        })
        return post
    }
    async update(post) {
        if (!post._id) {
            throw new Error('Не указан Id поста!')
        }
        const postUpdated = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return postUpdated
    }
    async delete(id) {
        if (!id) {
            throw new Error('Не указан Id поста!')
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
    
}

export default new postServices()