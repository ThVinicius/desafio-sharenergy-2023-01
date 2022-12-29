import agent from '../config/supertest'

describe('Testes da rota de login', () => {
  it('Tentando logar com um usuário não cadastrado', async () => {
    const username = 'teste'
    const password = 'teste'

    const { status } = await agent.post('/sign-in').send({ username, password })

    expect(status).toEqual(401)
  })

  it('Tentando logar com um usuário cadastrado', async () => {
    const username = 'desafiosharenergy'
    const password = 'sh@r3n3rgy'

    const { status, body } = await agent
      .post('/sign-in')
      .send({ username, password })

    expect(status).toEqual(200)

    expect(body).toHaveProperty('token')
  })
})
