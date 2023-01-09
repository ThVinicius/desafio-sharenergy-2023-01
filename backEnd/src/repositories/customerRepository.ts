import { ICustomer, ICustomerUpdate } from '../types/customerType'

export abstract class CustomerRepository {
  abstract add(customer: ICustomer): Promise<ICustomer>

  abstract findOneById(id: string): Promise<ICustomer | null>

  abstract getAll(): Promise<ICustomer[]>

  abstract update(customer: ICustomerUpdate): Promise<ICustomer | null>

  abstract deleteCustomer(id: string): Promise<ICustomer | null>
}
