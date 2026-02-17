import { Router } from 'express'
import { toggleHabit } from '../controllers/tracker.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/toggle', authMiddleware, toggleHabit)

export default router
