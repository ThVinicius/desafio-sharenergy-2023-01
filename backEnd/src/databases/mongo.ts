import { MongoClient, ObjectId, Db } from 'mongodb'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { randomUsers, customers } from './seeds/data'

dotenv.config()

export class MongoConfig {
  mongo: Db
  objectId: ObjectId
  MONGO_URI: string

  constructor() {
    this.MONGO_URI = process.env.MONGO_URI!
    this.mongo = new MongoClient(this.MONGO_URI!).db()
    this.objectId = new ObjectId()
  }

  async seed() {
    const username = 'desafiosharenergy'

    const findUsername = await this.mongo
      .collection('users')
      .findOne({ username })

    if (!findUsername) {
      await this.mongo
        .collection('users')
        .createIndex({ username: 1 }, { unique: true })

      const saltRounds: number = 10

      let password = 'sh@r3n3rgy'
      password = bcrypt.hashSync(password, saltRounds)

      await this.mongo.collection('users').insertOne({ username, password })
    }

    const findRandomUser = await this.mongo.collection('randomUsers').findOne()

    if (!findRandomUser) {
      await this.mongo.collection('randomUsers').insertMany(randomUsers())
    }

    const findCustomer = await this.mongo.collection('customers').findOne()

    if (!findCustomer) {
      await this.mongo
        .collection('customers')
        .createIndex({ email: 1 }, { unique: true })

      await this.mongo
        .collection('customers')
        .createIndex({ cpf: 1 }, { unique: true })

      await this.mongo.collection('customers').insertMany(customers)
    }
  }
}

const mongoConfig = new MongoConfig()

mongoConfig.seed()

const { mongo, objectId } = mongoConfig

export { mongo, objectId }
