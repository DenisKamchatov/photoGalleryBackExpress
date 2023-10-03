// import userServices from "../services/userServices.js"
import postsServices from "../services/postServices.js"

class postsController {
    async getAll(req, res) {
        try {
            const posts = await postsServices.getAll()
            res.json(posts)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }

    }
    async getOne(req, res) {
        try {
            const posts = await postsServices.getOne(req.params.id)
            res.json(posts)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }
    }
    async create(req, res) {
        try {
            const {userId, images, description} = req.body

            const post = await postsServices.create(userId, images, description)
            res.json(post)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }
    }
    async update(req, res) {
        try {
            const post = await postsServices.update(req.body)

            res.json(post)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }
    }
    async delete(req, res) {
        try {
            const post = await postsServices.delete(req.params.id)

            res.json(post)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }
    }
    
}

export default new postsController()