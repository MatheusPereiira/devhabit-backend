import { users } from '../data/db.js'

export function findUserByEmail(email) {
  return users.find(user => user.email === email)
}

export function findUserById(id) {
  return users.find(user => user.id === id)
}

export function createUser(userData) {
  users.push(userData)
  return userData
}

export function updateUser(user) {
  const index = users.findIndex(u => u.id === user.id)

  if (index !== -1) {
    users[index] = user
  }

  return user
}
