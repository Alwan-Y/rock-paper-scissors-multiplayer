import express from 'express'

import roomController from '../controller/room'

const router = express.Router()

router.post('/create', roomController.createRoom)
router.get('/', roomController.getRoom)

export default router
