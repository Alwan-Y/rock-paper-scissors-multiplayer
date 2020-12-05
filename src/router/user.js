import express from 'express'

import userController from '../controller/user'
import { auth, onlyPublic } from '../middleware'

const router = express.Router()

router.get('/register', onlyPublic, userController.getRegister)
router.post('/register', userController.postRegister)
router.get('/login', onlyPublic, userController.getLogin)
router.post('/login', userController.postLogin)
router.get('/logout', auth, userController.logout)

export default router
