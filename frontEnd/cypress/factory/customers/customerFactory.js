import faker from 'faker-br'

export default function customerFactory() {
  const customer = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    cpf: faker.br.cpf(),
    address: {
      cep: '16920000',
      city: faker.address.city(),
      district: 'Centro',
      street: faker.address.streetName(),
      number: '0'
    }
  }

  return customer
}
