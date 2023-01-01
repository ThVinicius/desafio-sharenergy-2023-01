import usersRandomRepository from '../databases/repositories/usersRandomRepository'

class UsersRandomService {
  async getAllUsers() {
    return await usersRandomRepository.getAll()
  }
}

export default new UsersRandomService()
