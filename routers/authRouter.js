import Router from 'express'
import authController from '../controllers/authController.js'
import { check } from 'express-validator'

const authRouter = new Router()

authRouter.post('/registration', [
    check('username', 'Имя пользователя не модет быть пустыи').notEmpty(),
    check('password', 'Пароль должен быть больше 6 символов').isLength({min: 6})
], authController.registration)
authRouter.post('/login', authController.login)
// authRouter.get('/users', authController.getAllUsers)

export default authRouter