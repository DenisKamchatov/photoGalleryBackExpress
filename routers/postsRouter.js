import Router from 'express'
import postsController from '../controllers/postsController.js'

const postsRouter = new Router()

postsRouter.get('/', postsController.getAll)
postsRouter.get('/:id', postsController.getOne)
postsRouter.post('/', postsController.create)
postsRouter.put('/', postsController.update)
postsRouter.delete('/:id', postsController.delete)

export default postsRouter