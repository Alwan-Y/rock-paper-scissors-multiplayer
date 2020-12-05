import express from 'express'

import roomController from '../controller/room'

const router = express.Router()

router.get('/id/:id', roomController.getRoom)
router.post('/create', roomController.postCreateRoom)
router.get('/join', roomController.getJoinRoom)
router.post('/join', roomController.postJoinRoom)
router.post('/play', roomController.addPlayerOptions)
router.get('/result', roomController.getResult)
router.post('/reset-room', roomController.resetChoice)
export default router
