export class AddEmpPage {
    getFirstName() {
        return cy.get("[placeholder='First Name']")
    }
    getMiddleName() {
        return cy.get("[placeholder='Middle Name']")
    }
    getLastName() {
        return cy.get("[placeholder='Last Name']")
    }
    getSaveButton() {
        return cy.get('.oxd-button--secondary')
    }

}