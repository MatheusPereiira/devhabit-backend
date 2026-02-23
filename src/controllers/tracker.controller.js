import { toggleHabitService } from '../services/tracker.service.js'
import { successResponse } from '../utils/response.js'

export const toggleHabit = async (req, res, next) => {
  try {
    const updatedUser = await toggleHabitService(req.user, req.body)

    return successResponse(res, 'Habit updated successfully', {
      current_xp: updatedUser.current_xp,
      level: updatedUser.level,
      streak: updatedUser.streak_count
    })
  } catch (err) {
    next(err)
  }
}