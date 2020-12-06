import express from 'express'

import dashboardController from '../controller/dashboard'

const router = express.Router()

router.get('/', dashboardController.getDashboard)

export default router
