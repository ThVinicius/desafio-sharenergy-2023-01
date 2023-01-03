import { CustomerRepository } from '../../repositories/customerRepository'
import { ICustomer, MongoCustomer } from '../../types/customerType'
import { mongo } from '../mongo'

class MongoCustomerRepository implements CustomerRepository {
  add(customer: ICustomer): Promise<MongoCustomer> {
    throw new Error('Method not implemented.')
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
}

export default new MongoCustomerRepository()
