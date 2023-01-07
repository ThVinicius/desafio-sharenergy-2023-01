import customerFactory from '../factory/customers/customerFactory'

describe('Testes relacionados a adição de clientes', () => {
  it('deve-se cadastrar um cliente que não tem conflito de email ou cpf', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input username"]').type('desafiosharenergy')

    cy.get('[data-cy="input password"]').type('sh@r3n3rgy')

    cy.intercept('POST', '/sign-in').as('signIn')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@signIn')

    cy.intercept('GET', '/customers').as('get-customers')

    cy.get('[data-cy="btn-customers"]').click({ force: true })

    cy.wait('@get-customers')

    cy.get('[data-cy="btn-add-customers"]').click()

    const customer = customerFactory()

    cy.get('[data-cy="input-name"]').type(customer.name)

    cy.get('[data-cy="input-email"]').type(customer.email)

    cy.get('[data-cy="input-phone"]').type(customer.phone)

    cy.get('[data-cy="input-cpf"]').type(customer.cpf)

    cy.intercept(
      'GET',
      `https://viacep.com.br/ws/${customer.address.cep}/json/`
    ).as('get-cep')

    cy.get('[data-cy="input-cep"]').type(customer.address.cep)

    cy.wait('@get-cep')

    cy.get('[data-cy="input-district"]').type(customer.address.district)

    cy.get('[data-cy="input-street"]').type(customer.address.street)

    cy.get('[data-cy="input-number"]').type(customer.address.number)

    cy.intercept('POST', `/customers`).as('post-customers')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@post-customers').then(({ response }) => {
      expect(response!.statusCode).to.equal(201)
    })
  })

  it('não deve cadastrar um cliente que possui conflito de email ou cpf', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input username"]').type('desafiosharenergy')

    cy.get('[data-cy="input password"]').type('sh@r3n3rgy')

    cy.intercept('POST', '/sign-in').as('signIn')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@signIn')

    cy.intercept('GET', '/customers').as('get-customers')

    cy.get('[data-cy="btn-customers"]').click({ force: true })

    cy.wait('@get-customers')

    cy.get('[data-cy="btn-add-customers"]').click()

    const customer = customerFactory()

    cy.get('[data-cy="input-name"]').type(customer.name)

    cy.get('[data-cy="input-email"]').type(customer.email)

    cy.get('[data-cy="input-phone"]').type(customer.phone)

    cy.get('[data-cy="input-cpf"]').type(customer.cpf)

    cy.intercept(
      'GET',
      `https://viacep.com.br/ws/${customer.address.cep}/json/`
    ).as('get-cep')

    cy.get('[data-cy="input-cep"]').type(customer.address.cep)

    cy.wait('@get-cep')

    cy.get('[data-cy="input-district"]').type(customer.address.district)

    cy.get('[data-cy="input-street"]').type(customer.address.street)

    cy.get('[data-cy="input-number"]').type(customer.address.number)

    cy.intercept('POST', `/customers`).as('post-customers')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@post-customers').then(({ response }) => {
      expect(response!.statusCode).to.equal(201)
    })

    cy.wait(1000)

    cy.get('[data-cy="input-name"]').type(customer.name)

    cy.get('[data-cy="input-email"]').type(customer.email)

    cy.get('[data-cy="input-phone"]').type(customer.phone)

    cy.get('[data-cy="input-cpf"]').type(customer.cpf)

    cy.intercept(
      'GET',
      `https://viacep.com.br/ws/${customer.address.cep}/json/`
    ).as('get-cep')

    cy.get('[data-cy="input-cep"]').type(customer.address.cep)

    cy.wait('@get-cep')

    cy.get('[data-cy="input-district"]').type(customer.address.district)

    cy.get('[data-cy="input-street"]').type(customer.address.street)

    cy.get('[data-cy="input-number"]').type(customer.address.number)

    cy.intercept('POST', `/customers`).as('post-customers')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@post-customers').then(({ response }) => {
      expect(response!.statusCode).to.equal(409)
    })
  })
})

describe('Testes relacionados a atualização de clientes', () => {
  it('deve-se atualizar o email de um cliente', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input username"]').type('desafiosharenergy')

    cy.get('[data-cy="input password"]').type('sh@r3n3rgy')

    cy.intercept('POST', '/sign-in').as('signIn')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@signIn')

    cy.intercept('GET', '/customers').as('get-customers')

    cy.get('[data-cy="btn-customers"]').click({ force: true })

    cy.wait('@get-customers')

    cy.get('[data-cy="btn-add-customers"]').click()

    const customer = customerFactory()

    cy.get('[data-cy="input-name"]').type(customer.name)

    cy.get('[data-cy="input-email"]').type(customer.email)

    cy.get('[data-cy="input-phone"]').type(customer.phone)

    cy.get('[data-cy="input-cpf"]').type(customer.cpf)

    cy.intercept(
      'GET',
      `https://viacep.com.br/ws/${customer.address.cep}/json/`
    ).as('get-cep')

    cy.get('[data-cy="input-cep"]').type(customer.address.cep)

    cy.wait('@get-cep')

    cy.get('[data-cy="input-district"]').type(customer.address.district)

    cy.get('[data-cy="input-street"]').type(customer.address.street)

    cy.get('[data-cy="input-number"]').type(customer.address.number)

    cy.intercept('POST', `/customers`).as('post-customers')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@post-customers').then(({ response }) => {
      expect(response!.statusCode).to.equal(201)

      const id = response!.body.id as string

      cy.intercept('GET', '/customers').as('get-customers')

      cy.get('[data-cy="btn-customers"]').click({ force: true })

      cy.wait('@get-customers')

      cy.intercept('GET', `/customers/${id}`).as('get-customer')

      cy.get(`[data-cy="customer-email:${customer.email}"]`).click()

      cy.wait('@get-customer')

      cy.get('[data-cy="btn-edit"]').click()

      const newCustomer = customerFactory()

      cy.get('[data-cy="input-email"]').clear()

      cy.get('[data-cy="input-email"]').type(newCustomer.email)

      cy.intercept('PATCH', `/customers`).as('update-customer')

      cy.get('[data-cy="btn-save"]').click()

      cy.wait('@update-customer').then(({ response }) => {
        expect(response!.statusCode).to.equal(200)
      })
    })
  })
})
