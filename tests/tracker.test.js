import request from 'supertest'
import app from '../src/app.js'
import { users, dailyLogs } from '../src/data/db.js'

beforeEach(() => {
  users.length = 0
  dailyLogs.length = 0
})

let token

beforeEach(async () => {
  await request(app)
    .post('/auth/register')
    .send({
      name: 'Teste',
      email: 'teste@email.com',
      password: '123456'
    })

  const login = await request(app)
    .post('/auth/login')
    .send({
      email: 'teste@email.com',
      password: '123456'
    })

  token = login.body.data.token 
})

describe('Tracker Endpoints', () => {

  it('Deve adicionar hábito e ganhar XP', async () => {
    const response = await request(app)
      .post('/tracker/toggle')
      .set('Authorization', `Bearer ${token}`)
      .send({
        date: '2026-02-15',
        type: 'leitura'
      })

    expect(response.statusCode).toBe(200)
  })

})