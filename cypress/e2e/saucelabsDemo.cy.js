it('verifying login in saucelabs', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secert_sauce')
    cy.get('[data-test="login-button"]').click()
    
  })