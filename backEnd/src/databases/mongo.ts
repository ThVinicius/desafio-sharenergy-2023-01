import { MongoClient, ObjectId } from 'mongodb'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import randomUsers from './seeds/data'

dotenv.config()

export class MongoConfig {
  mongo: MongoClient
  objectId: ObjectId
  MONGO_URI: string

  constructor() {
    this.MONGO_URI = process.env.MONGO_URI!
    this.mongo = new MongoClient(this.MONGO_URI!)
    this.objectId = new ObjectId()
  }

  async seed() {
    await this.mongo.connect()

    const username = 'desafiosharenergy'

    const findUsername = await this.mongo
      .db()
      .collection('users')
      .findOne({ username })

    if (!findUsername) {
      const saltRounds: number = 10

      let password = 'sh@r3n3rgy'
      password = bcrypt.hashSync(password, saltRounds)

      await this.mongo
        .db()
        .collection('users')
        .insertOne({ username, password })
    }

    const findRandomUser = await this.mongo
      .db()
      .collection('randomUsers')
      .findOne()

    if (!findRandomUser) {
      await this.mongo.db().collection('randomUsers').insertMany(randomUsers())
    }

    this.mongo.close()
  }
}

const mongoConfig = new MongoConfig()

mongoConfig.seed()

const { mongo, objectId } = mongoConfig

export { mongo, objectId }
