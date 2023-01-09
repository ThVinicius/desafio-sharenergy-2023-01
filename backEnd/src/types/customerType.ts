export interface ICustomer {
  id?: string
  name: string
  cpf: string
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
}

export interface ICustomerUpdate {
  id: string
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
}
