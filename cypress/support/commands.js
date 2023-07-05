// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.ts

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})

Cypress.Commands.add('getBySelLike', (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args)
})
/*
import { ProductPage } from '../support/shoopingQa/product_page';
Cypress.Commands.add("selectProduct", (productName, size, color) => {
  // Creating Object for ProductPage
  const productPage = new ProductPage();

  // Doing the search part for Shirts.
  productPage.getSearchClick().click()
  productPage.getSearchTextBox().type('Shirt');
  productPage.getSearchTextBox().type('{enter}')

  productPage.getProductsName().each(($el, index, $list) => {
    //cy.log($el.text());
    if ($el.text().includes(productName)) {
      cy.get($el).click();
    }
  })
  productPage.getSelectColor().select(color);
  productPage.getSelectSize().select(size);
  productPage.getAddtoCartButton().click();
})
*/