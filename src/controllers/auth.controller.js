import { registerUser, loginUser } from '../services/auth.service.js'

export const register = async (req, res, next) => {
  try {
    await registerUser(req.body)
    return res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { user, token } = await loginUser(req.body)

    return res.json({
      token,
      user
    })
  } catch (err) {
    next(err)
  }
}
