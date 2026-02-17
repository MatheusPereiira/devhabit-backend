import { getChartData } from '../services/stats.service.js'

export const getChart = (req, res) => {
  const chart = getChartData(req.user)
  return res.json(chart)
}
