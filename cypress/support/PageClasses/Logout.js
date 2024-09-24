class Logout{

    // Re-usable method for logout operation
    logoutofapp(){
        
        //clicking on dropdown icon
        cy.wait(3000)
        cy.get('.oxd-dropdown-menu').click();

        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{
            
            if ($ele.text()=='Logout') {
                
                cy.wrap($ele).click();
            }
        })        
    }    

}

export default Logout;
    