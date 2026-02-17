import { dailyLogs } from '../data/db.js'

export function getChartData(user) {
  const days = [...Array(15)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (14 - i))
    return d.toISOString().split('T')[0]
  })

  const data = days.map(date => {
    return dailyLogs
      .filter(log =>
        log.user_id === user.id &&
        log.date === date
      )
      .reduce((sum, log) => sum + log.xp_earned, 0)
  })

  return {
    labels: days.map(d => d.slice(-2)),
    data
  }
}
