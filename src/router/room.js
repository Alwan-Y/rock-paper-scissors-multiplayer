import express from 'express'

import roomController from '../controller/room'
import { auth } from '../middleware'

const router = express.Router()

router.get('/id/:id', roomController.getRoom)
router.post('/create', auth, roomController.postCreateRoom)
router.get('/join', roomController.getJoinRoom)
router.post('/join', roomController.postJoinRoom)
router.post('/play', roomController.addPlayerOptions)
router.get('/result', roomController.getResult)
router.post('/reset-room', roomController.resetChoice)
router.post('/join', auth, roomController.postJoinRoom)

export default router
