import Path from '../path/routePath'

import express from 'express'
import dashboardController from '../controller/dashboard'

const router = express.Router()

router.get(Path.dashboard, dashboardController.getDashboard)

export default router
