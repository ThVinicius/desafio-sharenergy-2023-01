import { IUser } from '../types/userTypes'

export abstract class UserRepository {
  abstract findByUsername(username: string): Promise<IUser | null>
}
