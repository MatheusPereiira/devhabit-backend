import { registerUser, loginUser } from '../services/auth.service.js'
import { successResponse } from '../utils/response.js'

export const register = async (req, res, next) => {
  try {
    await registerUser(req.body)

    return successResponse(
      res,
      'User created successfully',
      null,
      201
    )
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { user, token } = await loginUser(req.body)
    const { password_hash, ...safeUser } = user

    return successResponse(res, 'Login successful', {
      token,
      user: safeUser
    })
  } catch (err) {
    next(err)
  }
}