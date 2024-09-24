///<reference types="cypress" />

describe('orange test -using hooks', () =>{
    // before block - we want to configure once before the test suite - database
    // beforeeach clock - login operation
    beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    cy.get('[name="username"]').type('Admin');

    cy.get('[placeholder="Password"').type('admin123');

    cy.get('.orangehrm-login-button').click();

    });

    it('Admin test', () => {
    
        cy.contains('Admin').click();

        cy.url().should('include','admin');

    });

    it('Leave test', () => {
        cy.contains('Leave').click(); 
        
        cy.url().should('include', 'leave');
    
    });

    afterEach(() => {

        cy.wait(3000)
        cy.get('.oxd-userdropdown-tab').click();

        cy.get('.oxd-userdropdown-link').contains('Logout').click({force:true});


        
    });


    
});