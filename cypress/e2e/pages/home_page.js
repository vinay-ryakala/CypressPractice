export class HomePage {
    userDropdown() {
        return cy.get('.oxd-userdropdown-tab')
    }
    clickOnLogOut() {
        cy.contains('Logout').click()
    }
    headerTitle() {
        return cy.get('.oxd-topbar-header-title')
    }
    getAdmin() {
        return cy.get(':nth-child(1) > .oxd-main-menu-item')
    }
    getPIM() {
        return cy.get(':nth-child(2) > .oxd-main-menu-item')
    }
    addButton() {
        return cy.get('.orangehrm-header-container > .oxd-button')
    }
}