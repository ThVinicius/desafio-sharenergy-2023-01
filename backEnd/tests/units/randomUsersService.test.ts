import randomUsersRepository from '../../src/databases/mongodb/repositories/randomUsersRepository'
import randomUsersService from '../../src/services/randomUsersService'
import { RandomUsersFactory } from '../factories/randomUsersFactory'

describe('testes do método getAllUsers', () => {
  it('deve retornar todos os usuários randomicos cadastrados', async () => {
    const randomUsers = new RandomUsersFactory().getValue()

    jest
      .spyOn(randomUsersRepository, 'getAll')
      .mockResolvedValueOnce(randomUsers)

    const response = await randomUsersService.getAllUsers()

    expect(response).toHaveLength(50)
  })
})
