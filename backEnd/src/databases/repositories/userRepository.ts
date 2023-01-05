import { UserRepository } from '../../repositories/userRepository'
import { IUser } from '../../types/userTypes'
import { mongo } from '../mongo'

class MongoUserRepository implements UserRepository {
  async findByUsername(username: string): Promise<IUser | null> {
    const user = await mongo.collection<IUser>('users').findOne({ username })

    return user
  }
}

export default new MongoUserRepository()
