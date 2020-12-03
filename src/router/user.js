import express from 'express'

import userController from '../controller/user'

const router = express.Router()

router.get('/register', userController.getRegister)
router.post('/register', userController.postRegister)

export default router
