import Router from 'express'
import userController from '../controllers/userController.js'

const userRouter = new Router()

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.getOne)
userRouter.put('/', userController.update)

export default userRouter