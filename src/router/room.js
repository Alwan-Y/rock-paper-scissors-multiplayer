import express from 'express'

import roomController from '../controller/room'

const router = express.Router()

<<<<<<< HEAD
router.post('/create', roomController.createRoom)
router.get('/', roomController.getRoom)
router.post('/join/:id', roomController.joinRoom)
=======
router.post('/create', roomController.postCreateRoom)
router.get('/:id', roomController.getRoom)
router.get('/join', roomController.getJoinRoom)
>>>>>>> 0476036... add History model

export default router
