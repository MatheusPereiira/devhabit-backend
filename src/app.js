import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'DevHabit API running...' })
})

export default app
