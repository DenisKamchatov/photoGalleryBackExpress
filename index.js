import express from 'express'
import mongoose from 'mongoose'
import authRouter from './routers/authRouter.js'
import userRouter from './routers/userRouter.js'
import postsRouter from './routers/postsRouter.js'

const PORT = process.env.PORT || 5000

const DB_URL = 'mongodb+srv://kamchatovdenis:Ltybc2001@cluster0.er4phls.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', authRouter)
app.use('/users', userRouter)
app.use('/posts', postsRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp() 