import { StudentRegistration } from "./pages/qaDemo/student_registration";
import { HomePage } from "./pages/qaDemo/home_page";
describe('QA demo automation practice test ', function () {
    before(function () {
        cy.fixture('studentReg.json').then(function (data) {
            this.data = data;
        })
    })

    it('student registration form test', function () {
        const stdReg = new StudentRegistration()
        const hpage = new HomePage()
        const p= 'cypress/fixtures/Pic.png'
        cy.visit('https://demoqa.com/')
        hpage.getForm().click()
        hpage.getpracticeForm().click()

        stdReg.getFirstName().type(this.data.FirstName)
        stdReg.getLastName().type(this.data.LastName)
        stdReg.getEmail().type(this.data.Email)
        stdReg.getGender().check(this.data.gender, { force: true })//used force option because of overlapping
        stdReg.getMobileNum().type(this.data.Phone)
        stdReg.getDOB().click()
        stdReg.pickdate()
        stdReg.getSubjects().type(this.data.subjects[1] + '{enter}' + this.data.subjects[0] + '{enter}')
        stdReg.getHobbies().check(['1', '2'], { force: true },)
        //upload file with select file
        
        cy.get('#uploadPicture').selectFile(p)

        stdReg.getAddress().type(this.data.address.Street + '\n' + this.data.address.City + '\n' + this.data.address.Pincode)

        stdReg.getState().type("NCR{enter}")
        stdReg.getCity().type("Delhi{enter}")
    });
})