class Links{

    // method to click on a Link

    clickonlink(linktext){

        //I am  passing the text of the link from my it block and , in this method am clicking on it

        cy.contains(linktext).click()
    }
}

export default Links;