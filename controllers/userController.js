import userServices from "../services/userServices.js"

class userController {
    async getAll(req, res) {
        try {
            const users = await userServices.getAll()
            res.json(users)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }

    }
    async update(req, res) {
        try {
            const user = await userServices.update(req.body)
            res.json(user)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }
    }
    async getOne(req, res) {
        try {
            const user = await userServices.getOne(req.params.id)
            res.json(user)
        } catch (e) {
            res.status(400).json({message: 'Request Error'})
        }
    }
}

export default new userController()