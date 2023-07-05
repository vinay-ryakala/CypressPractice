export class LoginPage{
    enterUsername(userName){
        cy.get("[placeholder='Username']").type(userName)

    }
    enterPassword(passWord){
        cy.get("[placeholder='Password']").type(passWord)
    
    }
    clickOnLogin(){
        cy.get('.oxd-button').click()
    }
}