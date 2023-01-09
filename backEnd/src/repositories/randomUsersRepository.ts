import { IRandomUser } from '../types/randomUsersTypes'

export abstract class RandomUsersRepository {
  abstract getAll(): Promise<IRandomUser[]>
}
