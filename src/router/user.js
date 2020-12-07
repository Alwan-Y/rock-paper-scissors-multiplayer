import Path from '../path/routePath'

import express from 'express'
import userController from '../controller/user'
import { auth, onlyPublic } from '../middleware'

const router = express.Router()

router.get(Path.register, onlyPublic, userController.getRegister)
router.post(Path.register, userController.postRegister)
router.get(Path.login, onlyPublic, userController.getLogin)
router.post(Path.login, userController.postLogin)
router.get(Path.logout, auth, userController.logout)

export default router
