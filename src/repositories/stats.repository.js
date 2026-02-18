import { dailyLogs } from '../data/db.js'

export function findHabitsByUserAndDate(userId, date) {
  return dailyLogs.filter(
    log =>
      log.user_id === userId &&
      log.date === date
  )
}
