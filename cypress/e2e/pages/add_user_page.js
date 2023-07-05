export class AddUser {
    getUserRoleDropDown() {
        return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    }
    getESSrole() {
        return cy.get('.oxd-select-dropdown > :nth-child(3)')
    }
    getStatusDropdown() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
    }
    getEmpName() {
        return cy.get('.oxd-autocomplete-text-input > input')
    }
    getsuggestedName1st() {
        return cy.get('.oxd-autocomplete-dropdown.--positon-bottom > div:nth-child(1)')
    }
    getUserName() {
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    getPassword() {
        return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    getConfirmPassword() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    getSaveButton() {
        return cy.get('.oxd-button--secondary')
    }

}