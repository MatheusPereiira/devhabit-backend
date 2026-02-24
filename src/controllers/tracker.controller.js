import { toggleHabitService } from '../services/tracker.service.js'
import { successResponse } from '../utils/response.js'

export const toggleHabit = async (req, res, next) => {
  try {
    const { id } = req.user
    const { date, type } = req.body

    const updatedUser = await toggleHabitService(id, { date, type })

    return successResponse(
      res,
      'Hábito atualizado com sucesso',
      {
        current_xp: updatedUser.current_xp,
        level: updatedUser.level,
        streak: updatedUser.streak_count
      }
    )
  } catch (err) {
    return next(err)
  }
}