import { MongoClient, ObjectId } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI!

const mongo = new MongoClient(MONGO_URI).db()

const objectId = new ObjectId()

export { mongo, objectId }
