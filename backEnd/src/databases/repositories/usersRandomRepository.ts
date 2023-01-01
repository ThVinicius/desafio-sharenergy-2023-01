import { ObjectId, WithId, Document } from 'mongodb'
import { UsersRandomRepository } from '../../repositories/usersRandomRepository'
import { IUsersRandom } from '../../types/usersRandomTypes'
import usersRandomMapper from '../mappers/usersRandomMapper'
import { mongo } from '../mongo'

interface IProps extends WithId<Document>, IUsersRandom {
  _id: ObjectId
}

class MongoUsersRandomRepository implements UsersRandomRepository {
  async getAll(): Promise<IUsersRandom[]> {
    await mongo.connect()

    const mongoUsers = await mongo
      .db()
      .collection<IProps>('randomUsers')
      .find()
      .toArray()

    const users = usersRandomMapper.toMongo(mongoUsers)

    return users
  }
}

export default new MongoUsersRandomRepository()
