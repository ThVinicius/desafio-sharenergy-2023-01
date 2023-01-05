import { Request, Response } from 'express'
import customerService from '../services/customerService'
import { ICustomer, ICustomerUpdate } from '../types/customerType'

class CustomerController {
  async getOneById(req: Request, res: Response) {
    const { id } = req.params

    const customer = await customerService.getOneById(id)

    return res.status(200).send(customer)
  }

  async getAll(_: Request, res: Response) {
    const customers = await customerService.getAll()

    return res.status(200).send(customers)
  }

  async addCustomer(req: Request, res: Response) {
    const customer: ICustomer = req.body

    const customerId = await customerService.addCustomer(customer)

    return res.status(201).send({ id: customerId })
  }

  async update(req: Request, res: Response) {
    const customer: ICustomerUpdate = req.body

    const customerUpdate = await customerService.updateCustomer(customer)

    return res.status(200).send(customerUpdate)
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params

    await customerService.deleteCustomer(id)

    return res.sendStatus(200)
  }
}

export default new CustomerController()
