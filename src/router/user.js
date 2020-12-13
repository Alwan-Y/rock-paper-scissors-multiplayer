import PATH from '../path/routePath'

import express from 'express'
import userController from '../controller/user'
import { auth, onlyPublic } from '../middleware'

const router = express.Router()

router.get(PATH.REGISTER, onlyPublic, userController.getRegister)
router.post(PATH.REGISTER, onlyPublic, userController.postRegister)
router.get(PATH.LOGIN, onlyPublic, userController.getLogin)
router.post(PATH.LOGIN, onlyPublic, userController.postLogin)
router.get(PATH.LOGOUT, auth, userController.logout)

export default router
