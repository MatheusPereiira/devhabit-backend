import { registerUser, loginUser } from '../services/auth.service.js'

export const register = async (req, res) => {
  try {
    await registerUser(req.body)
    return res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { user, token } = await loginUser(req.body)

    return res.json({
      token,
      user
    })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
