import request from 'supertest'
import app from '../src/app.js'
import { users, dailyLogs } from '../src/data/db.js'

beforeEach(() => {
  users.length = 0
  dailyLogs.length = 0
})

describe('Auth Endpoints', () => {

  it('Deve registrar um novo usuário', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({
        name: 'Matheus',
        email: 'matheus@email.com',
        password: '123456'
      })

    expect(response.statusCode).toBe(201)
  })

})
