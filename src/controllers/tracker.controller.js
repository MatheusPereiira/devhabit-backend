import { toggleHabitService } from '../services/tracker.service.js'

export const toggleHabit = (req, res) => {
  try {
    const updatedUser = toggleHabitService(req.user, req.body)

    return res.json({
      current_xp: updatedUser.current_xp,
      level: updatedUser.level,
      streak: updatedUser.streak_count
    })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
