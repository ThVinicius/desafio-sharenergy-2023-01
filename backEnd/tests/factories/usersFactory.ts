import bcrypt from 'bcrypt'

export class UsersFactory {
  username: string
  password: string
  id: string

  constructor() {
    this.username = 'desafiosharenergy'
    this.password = 'sh@r3n3rgy'
    this.id = '63b7016ccca9516f8e656671'
  }

  withEncryptedPassword() {
    const saltRounds: number = 10

    const hashPassword = bcrypt.hashSync(this.password, saltRounds)

    return { id: this.id, username: this.username, password: hashPassword }
  }
}
