import { Document } from 'mongodb'
import {
  ICustomer,
  ICustomerUpdate,
  MongoCustomer
} from '../types/customerType'

export abstract class CustomerRepository {
  abstract add(customer: ICustomer): Promise<string>

  abstract findOneById(id: string): Promise<MongoCustomer | null>

  abstract getAll(): Promise<MongoCustomer[]>

  abstract update(customer: ICustomerUpdate): Promise<MongoCustomer | null>

  abstract deleteCustomer(id: string): Promise<Document | null>
}
