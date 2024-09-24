describe('scroll test', () => {

    it('test1', () => {
        cy.visit('https://www.google.com/');

        cy.get('#APjFqb').type('Masai{enter}');


        cy.scrollTo(0,1000);//down scroll

        cy.scrollTo(0,-1000)//upwaeds

        cy.contains('Maasai people').scrollIntoView().click();
        
    });
    
});