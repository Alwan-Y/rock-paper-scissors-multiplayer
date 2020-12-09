import express from 'express'

import roomController from '../controller/room'
import { auth } from '../middleware'

const router = express.Router()

router.get('/id/:id', roomController.getRoom)
router.post('/create', auth, roomController.postCreateRoom)
router.get('/join', roomController.getJoinRoom)
router.post('/join', roomController.postJoinRoom)
router.post('/join', auth, roomController.postJoinRoom)
router.post('/choice/:id/:choice', auth, roomController.postChoice)

export default router
