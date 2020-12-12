import express from 'express'
import userController from '../../controller/api/user'

const router = express.Router()

router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/user/logout', userController.logout)

export default router
