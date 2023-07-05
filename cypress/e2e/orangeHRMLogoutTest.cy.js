import { LoginPage } from "./pages/login_page"
import { HomePage } from "./pages/home_page"

var loginpage = new LoginPage();
var homepage = new HomePage()
describe('orangeHRMLogOutTest', () => {
    it('OrangeHrm Logout verification', () => {

        cy.visit(Cypress.env('login_url'))
        //entering username
        loginpage.enterUsername('Admin')
        //entering password
        loginpage.enterPassword('admin123')
        //clicking on login button
        loginpage.clickOnLogin()
        //clicking on drop down
        homepage.userDropdown().click()
        //clicking on logout
        homepage.clickOnLogOut()
        //Assertion
        cy.url().should('contain', Cypress.env('login_url'))
    })
})