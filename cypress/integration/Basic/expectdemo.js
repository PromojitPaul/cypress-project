///<reference types="cypress" />

describe('OrangeHRM Tests', () => {
    it('Test - using expect()', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // ecpect() to assert name attribute present in username tect.

        cy.get('[placeholder="Username"]').then(($uname)=>{
            
            expect($uname).to.have.attr('name','username').to.have.attr('placeholder');

            // if i want to type some value inside username

            // if we want to interact with the ele, then we have to convert jquery ele to cypress object. 

            cy.wrap($uname).type('Admin')
        })

        
        cy.get('[name="password"]').then(($pass)=>{


            expect($pass).to.have.attr('placeholder','Password')
            
            cy.wrap($pass).type('admin123')

        })

        // login button - i want to assert the text Login.

        cy.get('[type="submit"]').then(($login)=>{
            
            expect($login).to.have.text(' Login ')
            
            cy.wrap($login).click();


        })    
        cy.wait(2000)//wait time 2sec

        // Logout of orangehrm

        // clicking on element which opens the dropdown cy.get('.oxd-userdropdown-name').click();

        // we have to iterate the 4 Tements using each()
        cy.get('.oxd-userdropdown-tab').click();

        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{


            if ($ele.text() == 'Logout') {

                cy.wrap($ele).click();

            }

        })




    });
    
});