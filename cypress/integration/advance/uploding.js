describe('upload', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').selectFile('c:/Users/PROMOJIT/Desktop/Screenshot 2024-09-18 110645.png');

        cy.get('#file-upload').click();
        
    });
    
});