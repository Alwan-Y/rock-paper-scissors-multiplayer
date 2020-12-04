import express from 'express'

import roomController from '../controller/room'

const router = express.Router()

router.post('/create', roomController.postCreateRoom)
router.get('/:id', roomController.getRoom)
router.get('/join', roomController.getJoinRoom)

export default router
