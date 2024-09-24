///<reference types="cypress" />

describe('Rahul Shetty tests', () => {
    it('checkbox test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Assert the URL
        
        cy.url().should('include', 'AutomationPractice')
    
        // checking on checkbox using check()
        
        cy.get('#checkBoxOption1').check().should('be.checked');//-asserting whether we have checked or not
        cy.get('#checkBoxOption1').check().should('be.checked');//-asserting whether we have checked or not
        cy.get('#checkBoxOption1').check().should('be.checked');//-asserting whether we have checked or not
        
        // uncheking checkbox using unchek()
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');//-asserting whether we have checked or not
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');//-asserting whether we have checked or not
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');//-asserting whether we have checked or not
        


    });
    
    it('hide/ show test', () => {

        
        
    });

    it.only('radio test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('[value="radio1"]').should('not.be.checked').click().should('be.checked');
        cy.get('[value="radio1"]').click().should('be.checked');
        cy.get('[value="radio1"]').click().should('be.checked');
        
    });




});