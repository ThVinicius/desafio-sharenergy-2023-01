import randomUsersRepository from '../databases/mongodb/repositories/randomUsersRepository'

class RandomUsersService {
  async getAllUsers() {
    return await randomUsersRepository.getAll()
  }
}

export default new RandomUsersService()
