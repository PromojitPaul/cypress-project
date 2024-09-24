///<reference types="cypress" />

describe('Alear practice -input', () => {

    it('normal alert test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#name').type('name');
        
        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(alert2)=>{
            
            expect(alert2).to.contain('Hello , Are you sure you want to confirm?')

            return false;
        })
        
    });
    
});