import PATH from '../path/routePath'

import express from 'express'
import dashboardController from '../controller/dashboard'
import { auth } from '../middleware'

const router = express.Router()

router.get(PATH.DASHBOARD, auth, dashboardController.getDashboard)
router.get('/user', auth, dashboardController.getAllUser)
router.get('/user-bio', auth, dashboardController.getAllBio)
router.get('/user-history', auth,  dashboardController.getAllRoom)
router.delete('/delete-user/:id', auth, dashboardController.deleteUser)
router.delete('/delete-bio/:id', auth, dashboardController.deleteBio)
router.delete('/delete-room/:id', auth, dashboardController.deleteHistory)
router.patch('/update-user/:id', auth, dashboardController.updateRoleBase)

export default router
