import { ObjectId, Document } from 'mongodb'
import { CustomerRepository } from '../../repositories/customerRepository'
import { ICustomer, MongoCustomer } from '../../types/customerType'
import { mongo } from '../mongo'

class MongoCustomerRepository implements CustomerRepository {
  async add(customer: ICustomer): Promise<string> {
    await mongo.connect()

    const { insertedId } = await mongo
      .db()
      .collection('customers')
      .insertOne(customer)

    const parseId = insertedId.toString()

    await mongo.close()

    return parseId
  }

  async getAll(): Promise<MongoCustomer[]> {
    await mongo.connect()

    const customers = await mongo
      .db()
      .collection<MongoCustomer>('customers')
      .find()
      .toArray()

    await mongo.close()

    return customers
  }

  async deleteCustomer(id: string): Promise<Document | null> {
    await mongo.connect()

    const parseId = new ObjectId(id)

    const customer = await mongo
      .db()
      .collection('customers')
      .findOneAndDelete({ _id: parseId })

    await mongo.close()

    return customer.value
  }
}

export default new MongoCustomerRepository()
