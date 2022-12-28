import { Request, Response } from 'express'
import userService from '../services/userService'
import { IUser } from './../types/userTypes'

class UserController {
  async signIn(req: Request, res: Response) {
    const { username, password } = req.body as IUser

    const token = await userService.signIn(username, password)

    return res.status(200).send({ token })
  }
}

export default new UserController()
