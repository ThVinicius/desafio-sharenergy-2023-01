import { IUsersRandom } from './../types/usersRandomTypes'

export abstract class UsersRandomRepository {
  abstract getAll(): Promise<IUsersRandom[]>
}
