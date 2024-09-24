'///<reference types="cypress" />'

describe('deopdown tests', () => {
    it('static dropdown test -by value attribute', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');



        
        // handle the dropdown using value attribute
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3');
        cy.wait(1000)
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
        cy.wait(1000)
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1');
        cy.wait(1000)
        cy.get('#dropdown-class-example').select('').should('have.value','');
        
    });

    it('select -by text ', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        
        // handle the dropdown using value attribute
        cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1');
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2'); 
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3'); 
        cy.get('#dropdown-class-example').select('Select').should('have.value','');


        
    });

    it('using indix ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#dropdown-class-example').select(3).should('have.value','option3').should('be.selected');
        cy.get('#dropdown-class-example').select(2).should('have.value', 'option2');
        cy.get('#dropdown-class-example').select(1).should('have.value', 'option3'); 
        cy.get('#dropdown-class-example').select(0).should('have.value','');
        
    });

    it.only('Dynamic dropdown test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Step 1 - locator for suggestion cless and then type the keyword

        cy.get('[placeholder="Type to Select Countries"]').type('ind')

        cy.get('.ui-id-1').each(($ele)=>{

            if ($ele.text()=='India'){

                cy.wrap($ele).click();

            }

        })


        
    });
    
});