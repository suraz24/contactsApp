describe('Contacts App', function() {
    it('Checks for the delete contact flow', function() {
        //open the homepage
        cy.visit('/');

        //click on the first contact
        cy.get('#ContactsTable a').find('td').contains('Vivek').click();

        //check if the url is redirected to display the details for the user
        cy.url()
            .should('include', '/contact');

        //click on the delete contact button
        cy.get('.DeleteButton').click();

        //check if the popup has two buttons
        cy.get('.yesno').children().should('have.length', 2);

        //click on the no button
        cy.get('.yesno').within(function(){
             cy.get('#no').click();
        });

        //popup should disappear
         cy.get('.popup').should('have.length', 0);

        //click on the delete contact button
        cy.get('.DeleteButton').click();

        //click on the yes button
        cy.get('.yesno').within(function(){
            cy.get('#yes').click();
        });

        //should redirect to homepage
        cy.url()
            .should('include','/');

    });
});