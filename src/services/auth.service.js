import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'
import {
  findUserByEmail,
  createUser
} from '../repositories/user.repository.js'

export async function registerUser({ name, email, password }) {
  const userExists = findUserByEmail(email)
  if (userExists) throw new Error('Email already exists')

  const password_hash = await bcrypt.hash(password, 10)

  const newUser = {
    id: uuid(),
    name,
    email,
    password_hash,
    avatar_url: null,
    current_xp: 0,
    level: 1,
    lives: 3,
    streak_count: 0,
    last_activity_date: null
  }

  createUser(newUser)
  return newUser
}

export async function loginUser({ email, password }) {
  const user = findUserByEmail(email)
  if (!user) throw new Error('User not found')

  const validPassword = await bcrypt.compare(password, user.password_hash)
  if (!validPassword) throw new Error('Invalid password')

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )

  return { user, token }
}
