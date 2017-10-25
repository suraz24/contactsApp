describe('Contacts App', function() {
    it('Checks for the edit contact flow', function() {
        //open the homepage
        cy.visit('/');

        //find the add button and click it
        cy.get('.AddButton').click();

        //fill in the form with the correct data
        cy.get('.ContactForm').within(function(){
            cy.get('Input[name="firstname"]').type('Vivek');
            cy.get('Input[name="lastname"]').type('Bhusal');
            cy.get('Input[name="workphone"]').type('03666666');
            cy.get('Input[name="mobile"]').type('0466666666');
        })

        //check if the button is now enabled
        cy.get('.SaveButton').should('be.enabled');

        //simulate a button click
        cy.get('button').click();

        //simulate the click on the button in the popup
        cy.get('.popup').within(function () {
            cy.get('button').click();
        });

        cy.get('.BackButton').click();

        //find the contact with the name Vivek
        cy.get('#ContactsTable a').find('td').contains('Vivek').click();

        //check if the url is redirected to display the details for the user
        cy.url()
            .should('include', '/contact');

        //click on the edit button
        cy.get('.EditButton').click();

        //check if the url is now redirected to editcontact
        cy.url()
            .should('include', '/editContact');

        //check if the form has correct data
        cy.get('.ContactForm').within(function(){
            cy.get('Input[name="firstname"]').should('have.value','Vivek');
            cy.get('Input[name="lastname"]').should('have.value','Bhusal');
        });

        //fill in the form with invalid data
        cy.get('.ContactForm').within(function(){
            cy.get('Input[name="workphone"]').type('!@#45');
            cy.get('Input[name="mobile"]').type('123!@!#123');
        })

        //check if the button is still disabled
        cy.get('button').should('be.disabled');

        //check if the number of errors are 2
        cy.get('.formErrors').children().should('have.length',2);

        //clear the form
        cy.get('.ContactForm').within(function(){
            cy.get('Input[name="workphone"]').clear();
            cy.get('Input[name="mobile"]').clear();
        })

        //fill in the form with the correct data
        cy.get('.ContactForm').within(function(){
            cy.get('Input[name="workphone"]').type('03666666');
            cy.get('Input[name="mobile"]').type('0466666666');
        })

        //check if the button is now enabled
        cy.get('.SaveButton').should('be.enabled');

        //simulate a button click
        cy.get('button').click();

        //simulate the click on the button in the popup
        cy.get('.popup').within(function () {
            cy.get('button').click();
        });

        //check if the page has been redirected to view details of the contact
        cy.url()
            .should('include', '/contact');
    });
});