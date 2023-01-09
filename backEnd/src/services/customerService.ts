import customerRepository from '../databases/mongodb/repositories/customerRepository'
import { ICustomer, ICustomerUpdate } from '../types/customerType'
import { notFound } from '../utils/throwError'

class CustomerService {
  async getAll() {
    return await customerRepository.getAll()
  }

  async getOneById(id: string) {
    const customer = await customerRepository.findOneById(id)

    if (!customer) notFound('Cliente não encontrado!')

    return customer
  }

  async addCustomer(customer: ICustomer) {
    const addCustomer = await customerRepository.add(customer)

    return addCustomer
  }

  async updateCustomer(customer: ICustomerUpdate) {
    await this.getOneById(customer.id)

    return await customerRepository.update(customer)
  }

  async deleteCustomer(id: string) {
    await customerRepository.deleteCustomer(id)
  }
}

export default new CustomerService()
