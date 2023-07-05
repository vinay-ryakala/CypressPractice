//// <reference types ="cypress"/>
it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation step by step')
    cy.contains('Google Search').click()
  })