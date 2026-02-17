import { dailyLogs } from '../data/db.js'
import { calculateLevel } from '../utils/level.util.js'
import { calculateStreak } from '../utils/streak.util.js'

const XP_VALUE = 20

export function toggleHabitService(user, { date, type }) {
  const existing = dailyLogs.find(
    log =>
      log.user_id === user.id &&
      log.date === date &&
      log.type === type
  )

  if (!existing) {
    dailyLogs.push({
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
    const index = dailyLogs.indexOf(existing)
    dailyLogs.splice(index, 1)

    user.current_xp -= XP_VALUE
    user.level = calculateLevel(user.current_xp)
  }

  return user
}
