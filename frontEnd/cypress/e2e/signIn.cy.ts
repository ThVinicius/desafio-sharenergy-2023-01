describe('Testes da página de login', () => {
  it('Testando com uma conta não cadastrada', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input username"]').type('teste')

    cy.get('[data-cy="input password"]').type('teste')

    cy.intercept('POST', '/sign-in').as('signIn')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@signIn').then(({ response }) => {
      expect(response!.statusCode).to.equal(401)
    })
  })

  it('Testando com uma conta cadastrada e verificando se o token esta sendo armazenado no local storage', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input username"]').type('desafiosharenergy')

    cy.get('[data-cy="input password"]').type('sh@r3n3rgy')

    cy.get('[data-cy="remember me"]').click()

    cy.intercept('POST', '/sign-in').as('signIn')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@signIn').then(({ response }) => {
      expect(response!.statusCode).to.equal(200)
    })

    cy.url().should('equal', 'http://localhost:5173/users')

    cy.window().then(window =>
      expect(window.localStorage.getItem('token')).to.be.a('string')
    )
  })

  it('Testando com uma conta cadastrada e verificando se o token não esta sendo armazenado no local storage', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy="input username"]').type('desafiosharenergy')

    cy.get('[data-cy="input password"]').type('sh@r3n3rgy')

    cy.intercept('POST', '/sign-in').as('signIn')

    cy.get('[data-cy="submit"]').click()

    cy.wait('@signIn').then(({ response }) => {
      expect(response!.statusCode).to.equal(200)
    })

    cy.url().should('equal', 'http://localhost:5173/users')

    cy.window().then(
      window => expect(window.localStorage.getItem('token')).to.be.null
    )
  })
})
