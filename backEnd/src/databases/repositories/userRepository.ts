import { UserRepository } from '../../repositories/userRepository'
import { IUser } from '../../types/userTypes'
import { mongo } from '../mongo'

class MongoUserRepository implements UserRepository {
  async findByUsername(username: string): Promise<IUser | null> {
    await mongo.connect()

    const user = await mongo
      .db()
      .collection<IUser>('users')
      .findOne({ username })

    mongo.close()

    return user
  }
}

export default new MongoUserRepository()
