import Path from '../path/routePath'

import express from 'express'
import roomController from '../controller/room'
import { auth } from '../middleware'

const router = express.Router()

router.get(Path.getRoom, roomController.getRoom)
router.post(Path.createRoom, auth, roomController.postCreateRoom)
router.get(Path.Join, roomController.getJoinRoom)
router.post(Path.Join, roomController.postJoinRoom)
router.post(Path.play, roomController.addPlayerOptions)
router.get(Path.result, roomController.getResult)
router.post(Path.resetRoom, roomController.resetChoice)
router.post(Path.Join, auth, roomController.postJoinRoom)

export default router
