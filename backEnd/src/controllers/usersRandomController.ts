import { Request, Response } from 'express'
import usersRandomService from '../services/usersRandomService'

class UsersRandomController {
  async getAllUsers(_: Request, res: Response) {
    const users = await usersRandomService.getAllUsers()

    return res.status(200).send(users)
  }
}

export default new UsersRandomController()
