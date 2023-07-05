import { LoginPage } from "./pages/login_page"
import { HomePage } from "./pages/home_page"
import { AddUser } from "./pages/add_user_page";
import { AddEmpPage } from "./pages/add_employee";

var loginpage = new LoginPage();
var homepage = new HomePage()
var adduser = new AddUser()
var addemppage = new AddEmpPage()
describe('orangeHRMTestSuite', () => {
    beforeEach('Loging into OrangeHRM', () => {
        cy.visit(Cypress.env('login_url'))
        //entering username
        loginpage.enterUsername('Admin')
        //entering password
        loginpage.enterPassword('admin123')
        //clicking on login button
        loginpage.clickOnLogin()
    })
    afterEach('Logout from OrangeHRM', () => {
        //clicking on drop down
        homepage.userDropdown().click()
        cy.wait(2000)
        //clicking on logout
        homepage.clickOnLogOut()
    })
    it('OrangeHrm Login verification Test', () => {
        //verifying name filed present
        homepage.userDropdown().should('be.visible')
        //verifying dashboard text present or not
        homepage.headerTitle().should('contain', 'Dashboard')
    })
    it('Adding new user and verifying Test', () => {
        let userName = "ainaaR" + Math.floor(Math.random() * 100)

        homepage.getAdmin().click()
        homepage.addButton().click()
        adduser.getUserRoleDropDown().click()
        adduser.getESSrole().click()
        adduser.getStatusDropdown().click().type('{downArrow}{enter}')
        adduser.getEmpName().type('v')
        cy.wait(2000) // wait for 2 seconds
        adduser.getsuggestedName1st().click()
        adduser.getUserName().type(userName)
        adduser.getPassword().type('ab123455')
        adduser.getConfirmPassword().type('ab123455')
        adduser.getSaveButton().click()
        //Checking the window alert text
        cy.on('window:alert', (txt) => {
            //Assertion
            expect(txt).to.contains('Success');
        })
        cy.wait(2000)
        //Assertion
        cy.contains(userName).should('contain', userName)
    })
    it('Adding new employee and verifying Test', () => {
        homepage.getPIM().click()
        homepage.addButton().click()
        addemppage.getFirstName().type('vinay')
        addemppage.getMiddleName().type('Ra')
        addemppage.getLastName().type('a')
        addemppage.getSaveButton().click()
           cy.on('window:alert', (txt) => {
            //Assertion
            expect(txt).to.contains('Success');
        })
    })
})