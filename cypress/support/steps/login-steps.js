import { before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('open the browser and enter url',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

// {word} means it will take it as a string variable
When ('enter username as {word}', (username)=>{
    cy.get("input[name='username']").type(username)

})

And('enter password as {word}', (password)=>{

    cy.get("input[name='password']").type(password)

})

And('click on submit', ()=>{

    cy.get("button[type='submit']").click()
})

Then ('Login should be successful', ()=>{
    
    //cy.url().should('include','dashboard')
})    