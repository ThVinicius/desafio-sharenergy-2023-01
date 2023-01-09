export interface ICustomer {
  id?: string
  name: string
  email: string
  phone: string
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
