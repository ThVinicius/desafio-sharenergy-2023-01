import { Request, Response } from 'express'
import customerService from '../services/customerService'

class CustomerController {
  async getAll(_: Request, res: Response) {
    const customers = await customerService.getAll()

    return res.status(200).send(customers)
  }
}

export default new CustomerController()
