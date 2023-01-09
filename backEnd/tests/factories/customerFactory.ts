import { customers } from '../../prisma/seed/data'
import { ICustomer } from '../../src/types/customerType'

interface ICustomerWithId extends ICustomer {
  id: string
}

export class CustomerFactory {
  customers: ICustomer[]

  constructor() {
    this.customers = customers
  }

  getWithId() {
    return this.customers.map((customer, index) => {
      customer.id = `63bb64e86afdf7357555111${index}`

      return customer
    }) as ICustomerWithId[]
  }
}
