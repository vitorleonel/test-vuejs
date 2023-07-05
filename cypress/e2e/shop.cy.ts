// https://on.cypress.io/api

describe('Home', () => {
  it('should visit the shop page properly', () => {
    cy.visit('/shop')

    cy.get('.products__filters input').last().should('exist')
    cy.get('.products__filters select').last().should('exist')
    cy.get('.product').last().should('exist')
  })

  it('should be able to edit a product name', () => {
    cy.visit('/shop')

    cy.get('.product')
      .first()
      .then((product) => {
        const previousProductName = product.find('.product__name').text()

        cy.wrap(product).find('.product__select').click()

        cy.get('.product-modal__name-action').first().click()
        cy.get('.product-modal__name-input').first().type(' Edited')
        cy.get('.product-modal__name-action').first().click()

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(100).then(() => {
          const newProductName = product.find('.product__name').text()

          expect(previousProductName).not.equal(newProductName)
        })
      })
  })
})
