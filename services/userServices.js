import User from "../models/User.js"

class userServices {
    async getAll() {
        const users = await User.find()
        return users
    }
    async update(user) {
        if (!user._id) {
            throw new Error('Id пользователя не найден')
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true})
        return updatedUser
    }
    async getOne(id) {
        if (!id) {
            throw new Error('Не указан Id пользователя!')
        }
        const user = User.findById(id)
        return user
    }
}

export default new userServices()