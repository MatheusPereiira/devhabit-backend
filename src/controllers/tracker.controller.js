import { toggleHabitService } from '../services/tracker.service.js'

export const toggleHabit = (req, res, next) => {
  try {
    const updatedUser = toggleHabitService(req.user, req.body)

    return res.json({
      current_xp: updatedUser.current_xp,
      level: updatedUser.level,
      streak: updatedUser.streak_count
    })
  } catch (err) {
    next(err)
  }
}
