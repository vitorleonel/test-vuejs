// https://on.cypress.io/api

describe('Home', () => {
  it('visits the home page', () => {
    cy.visit('/')
    cy.contains('button', 'My Button')
  })
})
