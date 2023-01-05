import customerRepository from '../databases/repositories/customerRepository'
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
    const customerId = await customerRepository.add(customer)

    return customerId
  }

  async updateCustomer(customer: ICustomerUpdate) {
    const findCustomer = await this.getOneById(customer._id!)

    if (!findCustomer) notFound('Cliente não encontrado!')

    return await customerRepository.update(customer)
  }

  async deleteCustomer(id: string) {
    const customer = await customerRepository.deleteCustomer(id)

    if (customer === null) notFound('Cliente não encontrado!')
  }
}

export default new CustomerService()
