import PATH from '../path/routePath'

import express from 'express'
import dashboardController from '../controller/dashboard'
import { auth } from '../middleware'

const router = express.Router()

router.get(PATH.DASHBOARD, auth, dashboardController.getDashboard)
router.get(PATH.GET_ALL_USER, auth, dashboardController.getAllUser)
router.get(PATH.GET_ALL_BIO, auth, dashboardController.getAllBio)
router.get(PATH.GET_ALL_HISTORY, auth,  dashboardController.getAllRoom)
router.delete(PATH.DELETE_USER, auth, dashboardController.deleteUser)
router.delete(PATH.DELETE_BIO, auth, dashboardController.deleteBio)
router.delete(PATH.DELETE_HISTORY, auth, dashboardController.deleteHistory)
router.patch(PATH.UPDATE_ROLE_BASE, auth, dashboardController.updateRoleBase)

export default router
