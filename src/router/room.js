const express = require('express')

const roomController = require('../controller/room')

const router = express.Router()

router.post('/create', roomController.createRoom)
router.get('/', roomController.getRoom)

module.exports = router
