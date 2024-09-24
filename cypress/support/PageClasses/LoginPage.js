class LoginPage{

    //In this class, we have to write the cypress comands as a re-usable methods

    Enterurl(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
    }
//re-usable method for Login
    Logintoapp(){

        cy.get('[name="username"]').type('Admin') // hardcoded 
        cy.get('[placeholder="Password"').type('admin123') 
        cy.get('.orangehrm-login-button').click();
    }

    Forgotpassword(){

        cy.get('.orangehrm-login-forgot').click();

        cy.get('[placeholder="Username"]').type('random user');

        cy.get('.orangehrm-forgot-password-button--reset').click();

    }
}
export default LoginPage;