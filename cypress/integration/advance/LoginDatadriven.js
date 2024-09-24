describe('using data driven approach', () => {
    it('test1', () => {

        //define before hook-

        before(() => {
            
            //code to connect with the external file - example.js

            cy.fixture('example').then((data)=>{

                // initialize my data, I have to make it a global instance
                globalThis.data =data;
            })
        });
        
    });


    it('test2', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
        cy.get('input[name="username"]').type('data.username');

        // input Password here
        cy.get('').type('data.password');

        // click login
        cy.get('button[type="submit"]').click(); 
    });
    
});