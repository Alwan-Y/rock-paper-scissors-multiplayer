import express from 'express'

import roomController from '../controller/room'

const router = express.Router()

router.get('/id/:id', roomController.getRoom)
router.post('/create', roomController.postCreateRoom)
router.get('/join', roomController.getJoinRoom)
router.post('/join', roomController.postJoinRoom)

export default router
