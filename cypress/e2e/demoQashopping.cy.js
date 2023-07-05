
import { ProductPage } from './pages/shoopingQa/product_page';
import { CheckoutPage } from './pages/shoopingQa/checkout_page';
import { BillingPage } from './pages/shoopingQa/billing_page'

describe('Automation Test Suite ', function () {

    //Mostly used for Setup Part
    before(function () {
        cy.fixture('qademo').then(function (data) {
            this.data = data;
        })
    })

    it('My First Test Case', function () {
        //Object Creation for PageObject Page Class and assigning it to a constant variable

        // const homePage=new HomePage();
        const checkoutPage = new CheckoutPage();
        const billingPage = new BillingPage();
        const productPage = new ProductPage();
        //Calling
        cy.visit(Cypress.env('qademo'));
       
        // For Loop for Accessing productName array from Features File
        this.data.productName.forEach(function (element) {
            //     cy.selectProduct(element[0], element[1], element[2]);


            // Doing the search part for Shirts.
            productPage.getSearchClick().click()
            productPage.getSearchTextBox().type('Shirt');
            productPage.getSearchTextBox().type('{enter}')

            productPage.getProductsName().each(($el) => {
                //cy.log($el.text());
                if ($el.text().includes(element[0])) {
                    cy.get($el).click();
                }
            })
            productPage.getSelectColor().select(element[2]);
            productPage.getSelectSize().select(element[1]);
            productPage.getAddtoCartButton().click();

        })
        //End to End Test Completion including Checkout and Placing Order
        checkoutPage.getCartButton().click();
        //Validate if the items we added are successfully there in the cart using should and expect together.
        checkoutPage.getProducts().should(($p) => {
            expect($p).to.have.length(2); // There should be 2 items in cart.
            expect($p.first()).to.contain(this.data.productName[0][0]); // First Element should have blue denim
            expect($p).to.contain(this.data.productName[1][0]); // Verifying that playboy shirt should also be there
        });
        checkoutPage.getCheckoutButton().click();

        // Doing the Login and Entering the Billing Data
        billingPage.getShowLogin().click();
        billingPage.getLoginUserName().type(this.data.Email);
        billingPage.getLoginPassword().type(this.data.Password);
        billingPage.getLoginButton().click();
        billingPage.getBillingFirstName().clear().type(this.data.BillingFirstName);
        billingPage.getBillingLastName().clear().type(this.data.BillingLastName);
        billingPage.getBillingAddress().clear().type(this.data.StreetAddress);

        //Changing the timeout from 4 seconds to 10 seconds
        Cypress.config('defaultCommandTimeout', 10000)
        //
        billingPage.getStateDropdown().click().then(function () {
            billingPage.getStateSearchBox().clear().type('Haryana').type('{enter');
        });
        billingPage.getBillingCity().clear().type(this.data.City);
        billingPage.getBillingPostCode().clear().type(this.data.PostalCode);
        billingPage.getBillingPhone().clear().type(this.data.Phone);

        //Placing the Order button click by selecting the checkbox

        billingPage.getTermsCheckbox().click();
        billingPage.getPlaceOrderButton().click();

        // Assertion to check whether order has been successfully placed

        billingPage.getOrderPlacedText().then(function ($element) {
            expect($element.text().includes("Thank you")).to.be.true;
        })

    })
})
