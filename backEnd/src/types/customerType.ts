import { ObjectId, WithId, Document } from 'mongodb'

export interface ICustomer {
  name: string
  email: string
  phone: string
  address: {
    cep: string
    city: string
    district: string
    street: string
    number: string
  }
  cpf: string
}

export interface MongoCustomer extends WithId<Document>, ICustomer {
  _id: ObjectId
}
