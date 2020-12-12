import express from 'express'
import userController from '../../controller/api/user'
import roomController from '../../controller/api/room'

const router = express.Router()

router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/user/logout', userController.logout)

router.get('/room/id/:id', roomController.getRoom)
router.post('/room/create', roomController.postCreateRoom)
router.post('/room/join', roomController.postJoinRoom)
router.post('/room/choice/:id/:choice', roomController.postChoice)

export default router
