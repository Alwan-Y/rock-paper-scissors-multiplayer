import express from 'express'

import userController from '../controller/user'

const router = express.Router()

router.get('/register', userController.getRegister)
router.post('/register', userController.postRegister)
router.post('/login', userController.LoginCheck)

export default router
