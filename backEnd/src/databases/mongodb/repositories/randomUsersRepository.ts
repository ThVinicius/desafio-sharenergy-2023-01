import { RandomUser } from '@prisma/client'
import prisma from '../prisma'
import { RandomUsersRepository } from '../../../repositories/randomUsersRepository'

class PrismaRandomUsersRepository implements RandomUsersRepository {
  async getAll(): Promise<RandomUser[]> {
    const randomUsers = await prisma.randomUser.findMany()

    return randomUsers
  }
}

export default new PrismaRandomUsersRepository()
