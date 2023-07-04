// https://on.cypress.io/api

describe('Home', () => {
  it('should visit the about page properly', () => {
    cy.visit('/about')

    cy.get('.about__title').should('exist')
    cy.get('.about__subtitle').should('exist')
    cy.get('.about__image').should('exist')
    cy.get('.about__history p').should('have.have.length.above', 0)
  })
})
