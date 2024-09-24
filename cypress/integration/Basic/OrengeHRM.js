describe('Orange HRM Login and Employ Management', () => {
    before(() => {
        // Put URL here
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Its Login to the OrangeHRM website', () => {
        // Add user name

        cy.get('input[name="username"]').type('Admin');

        // input Password here
        cy.get('input[type="password"]').type('admin123');

        // click login
        cy.get('button[type="submit"]').click(); 
    });

    // it('navigate to the Admin tab and select User Management from the dropdown', () => {

    //     cy.get('#oxd-main-menu-item active').click();

    //     cy.get()
        
    // });
    
});