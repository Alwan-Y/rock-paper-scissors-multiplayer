import PATH from '../path/routePath'

import express from 'express'
import roomController from '../controller/room'
import { auth } from '../middleware'

const router = express.Router()


router.get(PATH.GET_ROOM, auth, roomController.getRoom)
router.post(PATH.CREATE_ROOM, auth, roomController.postCreateRoom)
router.get(PATH.JOIN, auth, roomController.getJoinRoom)
router.post(PATH.JOIN, auth, roomController.postJoinRoom)
router.post(PATH.JOIN, auth, roomController.postJoinRoom)
router.post(PATH.CHOICE, auth, roomController.postChoice)


export default router
