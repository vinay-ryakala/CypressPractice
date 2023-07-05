export class HomePage{
    getForm(){
       return cy.get('.category-cards > :nth-child(2)')
    }
    getpracticeForm(){
        return cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
    }
    getAlertsFrames(){
        return cy.get('.category-cards > :nth-child(3)')
    }
    getAlets(){
        return cy.get(':nth-child(3) > .element-list > .menu-list > #item-1')
    }
}