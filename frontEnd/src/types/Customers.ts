export interface ICustomer {
  _id: string
  name: string
  email: string
  fone: string
  address: {
    cep: string
    state: string
    city: string
    district: string
    street: string
    number: string
  }
  cpf: string
}
