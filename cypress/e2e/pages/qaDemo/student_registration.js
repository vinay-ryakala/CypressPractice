export class StudentRegistration {
    getFirstName() {
       return cy.get('#firstName')
    }
    getLastName(){
        return  cy.get('#firstName')
    }
    getEmail(){
        return cy.get('#userEmail')
    }
    getGender(){
       return  cy.get('[type="radio"]')
    }
    getMobileNum(){
        return cy.get('#userNumber')
    }
    getDOB(){
        return cy.get('#dateOfBirthInput')
    }
    pickdate(){
        cy.get('.react-datepicker__year-select').select('1997')//used select because of dropdown present inside select tag
        cy.get('.react-datepicker__month-select').select('0')
        cy.get('.react-datepicker__day--015').click()
        
    }
    getSubjects(){
        return cy.get('.subjects-auto-complete__value-container')
    }
    getHobbies(){
     return   cy.get('[type="checkbox"]')
    }
    getAddress(){
       return cy.get('#currentAddress')
    }
    getState(){
       return  cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
        // return cy.contains('Select state')
    }
    getCity(){
      return  cy.get('#stateCity-wrapper > :nth-child(3)')
       // return cy.contains('Select city')
    }
}