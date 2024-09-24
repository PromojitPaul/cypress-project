///<reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('ebey advanced', () => {
    it('test1', () => {

        //open ebay website

        cy.visit('https://www.ebay.com/');

        //locate and click on Advanced Search

        cy.get('[title="Advanced Search"]').click();

        // Advanced Search page serch  laptop with  price rangw $200 to$250

        cy.get('[data-testid="_nkw"]').type('Laptop'); 

        cy.get('[name="_udlo"]').type(200);

        cy.get('[name="_udhi"]').type(250);
        
        //click on using Advanced Search Options link
        cy.get('[href="/help/buying/search-tips/advanced-search?id=4049"]').click();


        cy.wait(6000);

        //get('[l-alt="customer service page - opens in new window or tab"]').

        //chakin for "Customer Service option" 

        // cy.get('[id="gh-title"]').click();
        // cy.window()//.should('contain','Customer Service')
        // cy.window().should('have.property', 'Customer Service')
        // cy.contain('Customer Service').should('exist');

        //go to main window

        cy.go("back");

        //Search for laptop

        cy.get('[size="50"]').type('Laptop');

        cy.wait(6000);

        cy.get('[id="gh-btn"]').click();

        //Search for US location  
        cy.get('[data-value="US Only"]').click();

         //chaking for "No exact matches found"



        cy.get('[class="srp-save-null-search__heading"]').should('exist');

        //quit

        cy.window().then((win)=>win.close());




    });
    
});