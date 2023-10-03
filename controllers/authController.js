import authService from "../services/authService.js"
import { validationResult } from 'express-validator'

class authController {
    async registration(req, res) {

        try {
            const errors = validationResult(req)
 
            if (!errors.isEmpty()) {
                res.status(400).json({message: 'Registration Error', errors})
            }

            const user = await authService.registration(req.body.username, req.body.password)
            return res.json(user)
            
        } catch (e) {
            res.status(400).json({message: 'Registration Error'})
        }
    }

    async login(req, res) {
        try {

            const user = await authService.login(req.body.username, req.body.password)
            return res.json(user)
        } catch (e) {
            res.status(400).json({message: 'Login Error'})
        }
    }

    // async getAllUsers(req, res) {
    //     try {
    //         const users = await authService.getAllUsers()
    //         return res.json(users)
    //     } catch (e) {
    //         res.status(400).json({message: 'Request Error'})
    //     }
    // }
    
}

export default new authController()
