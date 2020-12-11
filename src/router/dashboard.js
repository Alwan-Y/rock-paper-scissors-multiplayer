import PATH from '../path/routePath'

import express from 'express'
import dashboardController from '../controller/dashboard'

const router = express.Router()

router.get(PATH.DASHBOARD, dashboardController.getDashboard)
router.get('/user', dashboardController.getAllUser)
router.get('/user-bio', dashboardController.getAllBio)
router.get('/user-history', dashboardController.getAllRoom)
router.delete('/delete-user/:id', dashboardController.deleteUser)
router.delete('/delete-bio/:id', dashboardController.deleteBio)
router.delete('/delete-room/:id', dashboardController.deleteHistory)

export default router
