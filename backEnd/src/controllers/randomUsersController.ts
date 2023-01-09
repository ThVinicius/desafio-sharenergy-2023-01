import { Request, Response } from 'express'
import randomUsersService from '../services/randomUsersService'

class RandomUsersController {
  async getAllUsers(_: Request, res: Response) {
    const users = await randomUsersService.getAllUsers()

    return res.status(200).send(users)
  }
}

export default new RandomUsersController()
