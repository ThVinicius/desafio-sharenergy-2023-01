import customerRepository from '../databases/repositories/customerRepository'
import { notFound } from '../utils/throwError'

class CustomerService {
  async getAll() {
    return await customerRepository.getAll()
  }

  async deleteCustomer(id: string) {
    const customer = await customerRepository.deleteCustomer(id)

    if (customer === null) notFound('Cliente não encontrado!')
  }
}

export default new CustomerService()
