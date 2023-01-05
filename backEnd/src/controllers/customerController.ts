import { Request, Response } from 'express'
import customerService from '../services/customerService'
import { ICustomer } from '../types/customerType'

class CustomerController {
  async getAll(_: Request, res: Response) {
    const customers = await customerService.getAll()

    return res.status(200).send(customers)
  }

  async addCustomer(req: Request, res: Response) {
    const customer: ICustomer = req.body

    const customerId = await customerService.addCustomer(customer)

    return res.status(201).send({ id: customerId })
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params

    await customerService.deleteCustomer(id)

    return res.sendStatus(200)
  }
}

export default new CustomerController()
