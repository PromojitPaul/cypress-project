import { before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

//  Given step defination
Given ('open browzer enter simplefrom url',()=>{
    
    cy.visit('https://v1.training-support.net/selenium/simple-form')


})

// When block in step defination
When ('user enter firstname, lastname, email, contact',()=>{

    cy.get('[placeholder="First Name"]').type('Batman')


})

// And block in step defination
And ('user clicks on submit',()=>{



})

// Then block in step defination
Then('Successful alert should be displayed with a massage.',()=>{


})



