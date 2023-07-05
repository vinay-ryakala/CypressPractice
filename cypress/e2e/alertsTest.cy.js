import { HomePage } from "./pages/qaDemo/home_page";
import { AlertPage } from "./pages/qaDemo/alerts_page";
describe('QA demo automation practice test ', function () {
   
    it('practice alerts and frames test', function () {
        cy.visit('https://demoqa.com/')
        const hpage = new HomePage()
        const alertsPage=new AlertPage()
        hpage.getAlertsFrames().click()
        hpage.getAlets().click()
        alertsPage.getAlertBox().click()
        cy.on('window:alert', (txt) => {
            //Assertion
            expect(txt).to.contains('You clicked a button');
        })
        //clicking ok
        cy.on('window:confirm', () => true)
        //promtBox
        cy.window().then(function(p){
            //stubbing prompt window
            cy.stub(p, "prompt").returns("Tutorialspoint");
            // click on Click for JS Prompt button
            alertsPage.getPromtBox().click()
          cy.wait(2000)
            // verify application message on clicking on OK
            cy.get('#promptResult').contains('You entered Tutorialspoint')
         });
       
        //conforamtion box
        alertsPage.getConformationBox().click()
        cy.on('window:confirm', (txt) => {
            //Assertion
            expect(txt).to.contains('Do you confirm action?');
        })
        cy.on('window:confirm', () => true)
      //  cy.get('#confirmResult').should('have.text', 'You selected Ok')
        alertsPage.getConformationBox().click()
        cy.on('window:confirm', () => flase)
       // cy.get('#confirmResult').should('have.text', 'You selected Cancel')



    })
})