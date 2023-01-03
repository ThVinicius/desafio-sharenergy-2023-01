import customerRepository from '../databases/repositories/customerRepository'

class CustomerService {
  async getAll() {
    return await customerRepository.getAll()
  }
}

export default new CustomerService()
