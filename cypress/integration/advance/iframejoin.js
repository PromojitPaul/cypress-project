describe('iframe', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.frameLoaded('#courses-iframe')

        cy.iframe().contains('Blog').click();

        // cy.iframe().find()


    });
    it.only('frame2', () => {

        cy.visit('https://v1.training-support.net/selenium/iframes');

        // cy.frameLoaded('iframe[src="/selenium/frame1"]');

        cy.iframe('iframe[src="/selenium/frame1"]').find('#actionButton').first().click();

        
    });


});