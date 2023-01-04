import { Document } from 'mongodb'
import { ICustomer, MongoCustomer } from '../types/customerType'

export abstract class CustomerRepository {
  abstract add(customer: ICustomer): Promise<MongoCustomer>

  abstract getAll(): Promise<MongoCustomer[]>

  abstract deleteCustomer(id: string): Promise<Document | null>
}
