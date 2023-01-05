import customerRepository from '../databases/repositories/customerRepository'
import { ICustomer } from '../types/customerType'
import { notFound } from '../utils/throwError'

class CustomerService {
  async getAll() {
    return await customerRepository.getAll()
  }

  async addCustomer(customer: ICustomer) {
    const customerId = await customerRepository.add(customer)

    return customerId
  }

  async deleteCustomer(id: string) {
    const customer = await customerRepository.deleteCustomer(id)

    if (customer === null) notFound('Cliente não encontrado!')
  }
}

export default new CustomerService()
