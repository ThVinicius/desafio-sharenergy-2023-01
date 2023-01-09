import bcrypt from 'bcrypt'
import prisma from '../../src/databases/mongodb/prisma'
import { ICustomer } from '../../src/types/customerType'
import { IRandomUser } from '../../src/types/randomUsersTypes'
import { randomUsers, customers } from './data'

class Seed {
  randomUsers: IRandomUser[]
  customers: ICustomer[]
  user: { username: string; password: string }

  constructor() {
    this.user = { username: 'desafiosharenergy', password: 'sh@r3n3rgy' }
    this.randomUsers = randomUsers()
    this.customers = customers
  }

  async userSeed() {
    const saltRounds: number = 10

    const hashPassword = bcrypt.hashSync(this.user.password, saltRounds)

    await prisma.user.upsert({
      create: { username: this.user.username, password: hashPassword },
      update: { password: hashPassword },
      where: { username: this.user.username }
    })
  }

  async randomUsersSeed() {
    const randomUsersCount = await prisma.randomUser.count()

    if (randomUsersCount < 50) {
      await prisma.randomUser.deleteMany()

      await prisma.randomUser.createMany({ data: this.randomUsers })
    }
  }

  async customersSeed() {
    const customerCount = await prisma.customer.count()

    if (customerCount === 0) {
      await prisma.customer.createMany({ data: this.customers })
    }
  }
}

const seed = new Seed()

Promise.all([seed.userSeed(), seed.randomUsersSeed(), seed.customersSeed()])
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
