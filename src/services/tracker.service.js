import crypto from 'crypto'
import {
  findHabit,
  createHabit,
  deleteHabit
} from '../repositories/tracker.repository.js'
import { updateUser } from '../repositories/user.repository.js'
import { calculateLevel } from '../utils/level.util.js'
import { calculateStreak } from '../utils/streak.util.js'

const XP_VALUE = 20

export function toggleHabitService(user, { date, type }) {
  const existing = findHabit(user.id, date, type)

  if (!existing) {
    createHabit({
      id: crypto.randomUUID(),
      user_id: user.id,
      date,
      type,
      xp_earned: XP_VALUE,
      completed: true
    })

    user.current_xp += XP_VALUE
    user.level = calculateLevel(user.current_xp)
    user.streak_count = calculateStreak(user, date)
    user.last_activity_date = date

  } else {
    deleteHabit(existing)

    user.current_xp -= XP_VALUE
    user.level = calculateLevel(user.current_xp)
  }

  updateUser(user)

  return user
}
