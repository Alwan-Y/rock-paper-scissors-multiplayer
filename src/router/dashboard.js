import PATH from '../path/routePath'

import express from 'express'
import dashboardController from '../controller/dashboard'

const router = express.Router()

router.get(PATH.DASHBOARD, dashboardController.getDashboard)

export default router
