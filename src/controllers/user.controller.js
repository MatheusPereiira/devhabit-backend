import { getUserProfile } from '../services/user.service.js'

export const getMe = (req, res) => {
  const profile = getUserProfile(req.user)
  return res.json(profile)
}
