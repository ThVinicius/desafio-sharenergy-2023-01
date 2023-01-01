import { WithId, Document, ObjectId } from 'mongodb'
import { IUsersRandom } from '../../types/usersRandomTypes'

interface IProps extends WithId<Document>, IUsersRandom {
  _id: ObjectId
}

class MongoUsersRandomMapper {
  toMongo(usersRandom: IProps[]) {
    return usersRandom.map(({ name, picture, username, email, age }) => ({
      picture,
      name,
      username,
      email,
      age
    }))
  }
}

export default new MongoUsersRandomMapper()
