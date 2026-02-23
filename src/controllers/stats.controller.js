import { getChartData } from '../services/stats.service.js'
import { successResponse } from '../utils/response.js'

export const getChart = async (req, res, next) => {
  try {
    const chart = await getChartData(req.user)

    return successResponse(res, 'Chart data retrieved successfully', chart)
  } catch (err) {
    next(err)
  }
}