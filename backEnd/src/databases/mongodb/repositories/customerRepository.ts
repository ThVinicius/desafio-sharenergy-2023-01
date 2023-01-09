import prisma from '../prisma'
import { CustomerRepository } from '../../../repositories/customerRepository'
import { ICustomer, ICustomerUpdate } from '../../../types/customerType'

class PrismaCustomerRepository implements CustomerRepository {
  async add(customer: ICustomer): Promise<ICustomer> {
    const [newCustomer] = await prisma.$transaction([
      prisma.customer.create({ data: customer })
    ])

    return newCustomer
  }

  async findOneById(id: string): Promise<ICustomer | null> {
    return await prisma.customer.findUnique({ where: { id } })
  }

  async getAll(): Promise<ICustomer[]> {
    const customers = await prisma.customer.findMany()

    return customers
  }

  async update(customer: ICustomerUpdate): Promise<ICustomer | null> {
    const { id, ...rest } = customer

    const newCustomer = await prisma.customer.update({
      where: { id },
      data: rest
    })

    return newCustomer
  }

  async deleteCustomer(id: string): Promise<ICustomer | null> {
    return await prisma.customer.delete({ where: { id } })
  }
}

export default new PrismaCustomerRepository()
