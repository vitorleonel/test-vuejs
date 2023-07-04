// https://on.cypress.io/api

describe('Home', () => {
  it('should visit the home page properly', () => {
    cy.visit('/')

    cy.get('.home__banner').first().should('exist')
    cy.get('.home__category').last().should('have.length.above', 0)
  })

  it('should redirect to the shop screen when clicking on a category', () => {
    cy.visit('/')

    cy.get('.home__category').last().click()
    cy.location('pathname').should('eq', '/shop')
  })
})
