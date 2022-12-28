import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import userRepository from '../databases/repositories/userRepository'
import { unauthorized } from '../utils/throwError'
import { IUser } from './../types/userTypes'

dotenv.config()

class UserService {
  async signIn(username: string, password: string) {
    const user = await userRepository.findByUsername(username)

    this.validateUser(user, password)

    const parseId = user!._id.toString()

    const token = this.createOauthToken(parseId)

    return token
  }

  validateUser(user: IUser | null, password: string) {
    if (!user) unauthorized('Usuário ou senha incorreto')

    const compare = bcrypt.compareSync(password, user!.password)

    if (!compare) unauthorized('Usuário ou senha incorreto')
  }

  createOauthToken(_id: string) {
    const secretKey = process.env.JWT_SECRET!

    const config = { expiresIn: 60 * 60 * 24 * 30 }

    const token = jwt.sign({ _id }, secretKey, config)

    return token
  }
}

export default new UserService()
