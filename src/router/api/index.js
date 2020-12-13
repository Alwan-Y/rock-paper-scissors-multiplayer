import express from 'express'
import userController from '../../controller/api/user'
import roomController from '../../controller/api/room'
import PATH from '../../path/routePath'

const router = express.Router()

router.post(PATH.API_REGISTER, userController.register)
router.post(PATH.API_LOGIN, userController.login)
router.get(PATH.API_LOGOUT, userController.logout)

router.get(PATH.API_GET_ROOM, roomController.getRoom)
router.post(PATH.API_CREATE_ROOM, roomController.postCreateRoom)
router.post(PATH.API_JOIN_ROOM, roomController.postJoinRoom)
router.post(PATH.API_POST_CHOICE, roomController.postChoice)

export default router
