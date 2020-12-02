import express from 'express'
import ViewsController from '../../controllers/views'

const router = express.Router()

router.get('/', ViewsController.get)

export default router