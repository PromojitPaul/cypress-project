///<reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('webtable test', () => {
    //fetching single element of webtable
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath('//*[@name="courses"]/tbody/tr[10]/td[3]').then(($ele)=>{

            //cy.log use to print the console of cypress
            cy.log($ele.text());

            // var ele2 = $ele.text() 
            
        })
        
    });
    
});  