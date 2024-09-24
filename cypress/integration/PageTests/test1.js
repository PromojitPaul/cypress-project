import LoginPage from "../../support/PageClasses/LoginPage";
import Logout from "../../support/PageClasses/Logout";
import Links from "../../support/PageClasses/Links";

describe('Orangetests', () => {
    
    // I have to create object of all the classes.
    
    const loginobj = new LoginPage();
    
    const linksobj = new Links();
    
    const logoutobj = new Logout();
    
    it('test-1', () => {

        // enter url
        
        loginobj.Enterurl();
        
        // login
        
        loginobj.Logintoapp();
        
        // click on admin link
        
        linksobj.clickonlink('Admin')
        
        // logout
        
        logoutobj.logoutofapp();
    });

});