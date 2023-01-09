import customerRepository from '../../src/databases/mongodb/repositories/customerRepository'
import customerService from '../../src/services/customerService'
import { CustomerFactory } from '../factories/customerFactory'

describe('testes do método getAll', () => {
  it('deve retornar todos os clientes cadastrados', async () => {
    const customers = new CustomerFactory().getWithId()

    jest.spyOn(customerRepository, 'getAll').mockResolvedValueOnce(customers)

    const response = await customerService.getAll()

    expect(response).toHaveLength(3)
  })
})

describe('testes do método getOneById', () => {
  it('deve retornar o cliente com o id passado', async () => {
    const customer = new CustomerFactory().getWithId()[0]

    jest
      .spyOn(customerRepository, 'findOneById')
      .mockResolvedValueOnce(customer)

    const response = await customerService.getOneById(customer.id)

    expect(response).toBe(customer)
  })

  it('deve lançar um erro de não encontrado caso não encontre o cliente', async () => {
    const customer = new CustomerFactory().getWithId()[0]

    jest.spyOn(customerRepository, 'findOneById').mockResolvedValueOnce(null)

    const promise = customerService.getOneById(customer.id)

    expect(promise).rejects.toEqual({
      code: 'Not Found',
      message: 'Cliente não encontrado!'
    })
  })
})

describe('testes do método addCustomer', () => {
  it('deve poder cadastrar um cliente', async () => {
    const customerWithoutId = new CustomerFactory().customers[0]

    jest
      .spyOn(customerRepository, 'add')
      .mockResolvedValueOnce(customerWithoutId)

    const response = await customerService.addCustomer(customerWithoutId)

    expect(response).toBe(customerWithoutId)
  })
})

describe('testes do método updateCustomer', () => {
  it('deve poder atualizar um cliente', async () => {
    const customer = new CustomerFactory().getWithId()[0]

    jest
      .spyOn(customerRepository, 'findOneById')
      .mockResolvedValueOnce(customer)

    jest.spyOn(customerRepository, 'update').mockResolvedValueOnce(customer)

    await customerService.updateCustomer(customer)

    expect(customerRepository.findOneById).toBeCalled()
    expect(customerRepository.update).toBeCalled()
  })

  it('deve lançar um erro de não encontrado caso não encontre o cliente', async () => {
    const customer = new CustomerFactory().getWithId()[0]

    jest.spyOn(customerRepository, 'findOneById').mockResolvedValueOnce(null)

    const promise = customerService.updateCustomer(customer)

    expect(promise).rejects.toEqual({
      code: 'Not Found',
      message: 'Cliente não encontrado!'
    })
  })
})

describe('testes do método deleteCustomer', () => {
  it('deve poder deletar um cliente', async () => {
    const customer = new CustomerFactory().getWithId()[0]

    jest
      .spyOn(customerRepository, 'deleteCustomer')
      .mockResolvedValueOnce(customer)

    await customerService.deleteCustomer(customer.id)

    expect(customerRepository.deleteCustomer).toBeCalled()
  })
})
