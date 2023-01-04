import { Request, Response } from 'express'
import customerService from '../services/customerService'

class CustomerController {
  async getAll(_: Request, res: Response) {
    const customers = await customerService.getAll()

    return res.status(200).send(customers)
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params

    await customerService.deleteCustomer(id)

    return res.sendStatus(200)
  }
}

export default new CustomerController()
