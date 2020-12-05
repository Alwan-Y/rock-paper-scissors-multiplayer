import express from 'express'

import userController from '../controller/user'
import { auth } from '../middleware'

const router = express.Router()

router.get('/register', userController.getRegister)
router.post('/register', userController.postRegister)
router.get('/login', userController.getLogin)
router.post('/login', userController.postLogin)
router.get('/logout', auth, userController.logout)

export default router
