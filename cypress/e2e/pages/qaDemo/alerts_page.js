export class AlertPage{
    getAlertBox(){
        return cy.get('#alertButton')
    }
    getConformationBox(){
        return cy.get('#confirmButton')
    }
    getPromtBox(){
        return cy.get('#promtButton')
    }
}