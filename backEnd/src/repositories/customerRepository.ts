import { ICustomer, MongoCustomer } from '../types/customerType'

export abstract class CustomerRepository {
  abstract add(customer: ICustomer): Promise<MongoCustomer>

  abstract getAll(): Promise<MongoCustomer[]>
}
