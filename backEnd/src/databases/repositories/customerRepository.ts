import { ObjectId, Document } from 'mongodb'
import { CustomerRepository } from '../../repositories/customerRepository'
import {
  ICustomer,
  ICustomerUpdate,
  MongoCustomer
} from '../../types/customerType'
import { mongo } from '../mongo'

class MongoCustomerRepository implements CustomerRepository {
  async add(customer: ICustomer): Promise<string> {
    const { insertedId } = await mongo
      .collection('customers')
      .insertOne(customer)

    const parseId = insertedId.toString()

    return parseId
  }

  async findOneById(id: string): Promise<MongoCustomer | null> {
    const _id = new ObjectId(id)

    const customer = await mongo
      .collection<MongoCustomer>('customers')
      .findOne({ _id })

    return customer
  }

  async getAll(): Promise<MongoCustomer[]> {
    const customers = await mongo
      .collection<MongoCustomer>('customers')
      .find()
      .toArray()

    return customers
  }

  async update(customer: ICustomerUpdate): Promise<MongoCustomer | null> {
    const parseId = new ObjectId(customer._id!)

    delete customer._id

    const customerUpdate = await mongo
      .collection<MongoCustomer>('customers')
      .findOneAndUpdate(
        { _id: parseId },
        { $set: customer },
        { returnDocument: 'after' }
      )

    return customerUpdate.value
  }

  async deleteCustomer(id: string): Promise<Document | null> {
    const parseId = new ObjectId(id)

    const customer = await mongo
      .collection('customers')
      .findOneAndDelete({ _id: parseId })

    return customer.value
  }
}

export default new MongoCustomerRepository()
