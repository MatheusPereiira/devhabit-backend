import { dailyLogs } from '../data/db.js'

export function findHabit(userId, date, type) {
  return dailyLogs.find(
    log =>
      log.user_id === userId &&
      log.date === date &&
      log.type === type
  )
}

export function createHabit(habitData) {
  dailyLogs.push(habitData)
  return habitData
}

export function deleteHabit(habit) {
  const index = dailyLogs.indexOf(habit)
  if (index !== -1) {
    dailyLogs.splice(index, 1)
  }
}

export function findHabitsByUser(userId) {
  return dailyLogs.filter(log => log.user_id === userId)
}
