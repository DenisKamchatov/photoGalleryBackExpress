import User from '../models/User.js'
import bcryptjs from 'bcryptjs'

class authService {

    async registration(username, password) {
            
            const candidate = await User.findOne({username})

            if (candidate) {
                throw new Error('Пользователь существует')
            }
            
            const hashPassword = bcryptjs.hashSync(password, 7)
            
            const user = await User.create({
                username: username,
                password: hashPassword
            })
            return user
    }

    async login(username, password) {

        const user = await User.findOne({username})
        if (!user) {
            throw new Error(`Пользователь ${username} не найден!`)
        }
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            throw new Error('Введен неверно пароль!')
        }
        
        return user
    }

    // async getAllUsers() {

    //     const users = await User.find()
    //     return users
    // }
    
}

export default new authService

