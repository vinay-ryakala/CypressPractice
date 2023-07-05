it('assertion demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn')
        .and('be.visible')//chaining multiple should we can write and after one should
        .and('be.enabled')
  })