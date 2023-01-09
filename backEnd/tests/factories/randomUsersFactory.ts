import { randomUsers } from '../../prisma/seed/data'
import { IRandomUser } from '../../src/types/randomUsersTypes'

interface IRandomUserWithId extends IRandomUser {
  id: string
}

export class RandomUsersFactory {
  randomUsers: IRandomUser[]

  constructor() {
    this.randomUsers = randomUsers()
  }

  getValue() {
    return this.randomUsers.map((randomUser, index) => {
      randomUser.id = `63bb64e86afdf7357555111${index}`

      return randomUser
    }) as IRandomUserWithId[]
  }
}
