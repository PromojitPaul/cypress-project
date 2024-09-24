///<reference types="cypress" />

describe('navigetin to home page', () => {
    it('home page -using navigetion', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click();

        
        cy.get(':nth-child(4) > .new-navbar-highlighter').click({force: true});

        // cy.xpath('')
        cy.wait(4000);

        cy.go('back'); // this for go back

        cy.go('forward'); // this navigate forward

        cy.reload(); // this for refrsh or reload


    });
    
});