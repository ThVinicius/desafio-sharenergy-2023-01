import { User } from '@prisma/client'
import { UserRepository } from '../../../repositories/userRepository'

import prisma from '../prisma'

class PrismaUserRepository implements UserRepository {
  async findByUsername(username: string): Promise<User | null> {
    return await prisma.user.findUnique({ where: { username } })
  }
}

export default new PrismaUserRepository()
