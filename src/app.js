import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import trackerRoutes from './routes/tracker.routes.js'
import statsRoutes from './routes/stats.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/tracker', trackerRoutes)
app.use('/stats', statsRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'DevHabit API running...' })
})

export default app
