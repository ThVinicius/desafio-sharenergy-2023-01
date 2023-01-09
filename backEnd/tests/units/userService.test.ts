import { UsersFactory } from '../factories/usersFactory'
import userService from '../../src/services/userService'
import userRepository from '../../src/databases/mongodb/repositories/userRepository'

describe('testes dos métodos da classe UserService', () => {
  it('deve se criar um token caso o username e a senha estejam corretas', async () => {
    const user = new UsersFactory()

    jest
      .spyOn(userRepository, 'findByUsername')
      .mockResolvedValueOnce(user.withEncryptedPassword())

    const response = await userService.signIn(user.username, user.password)

    expect(response).toEqual(expect.any(String))
  })

  it('deve lançar um erro caso o password esteja incorreto', async () => {
    const user = new UsersFactory()

    const username = user.username
    const password = 'test'

    jest
      .spyOn(userRepository, 'findByUsername')
      .mockResolvedValueOnce(user.withEncryptedPassword())

    const promise = userService.signIn(username, password)

    expect(promise).rejects.toEqual({
      code: 'Unauthorized',
      message: 'Usuário ou senha incorreto'
    })
  })
})
