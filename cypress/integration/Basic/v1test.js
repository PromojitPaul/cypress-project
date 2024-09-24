describe('v1 tests', () => {
    it.only('FormTest -using CSSselectors ', () => {
        
        cy.visit('https://v1.training-support.net/selenium/simple-form')

        // Assert URL selenium
    
        cy.url().should('include', 'selenium')

        // Assert Titel

        cy.title().should('include','Simple Form')

        cy.xpath("(//*[contains(text(),'Simple Form')])[2]").should('be.visible')

        // Asserting Valu

          cy.get('#fristname').should('have.attr','placeholder','Frist Name')

        cy.get('#fristName').type('Promojit').should('have.valu','Promojit');

        cy.get('#lastName').type('Paul').should('have.valu','Paul');

        cy.get('#email').type('promojitpaul78@gmail.com').should('have.valu','promojitpaul78@gmail.com');
    });

    it('Form test - using Xpath locator', () => {

        cy.visit('https://v1.training-support.net/selenium/simple-form')

        cy.xpath('//input[@id="firstName"]').type("Promojit")
        
        cy.xpath('//input[@placeholder="Last Name"]').type('Paul')
        
        cy.xpath('//*[@type="email"]').type('promojitpaul78@gmail.com')
            
        


        




    });

});