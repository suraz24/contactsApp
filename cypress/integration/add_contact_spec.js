
describe('Contacts App', function() {
    it('Checks for the add contact flow', function(){
        //open the homepage
        cy.visit('/');

        //find the add button and click it
        cy.get('.AddButton').click();

        //check if the url has changed and redirected to the add contact form
        cy.url()
            .should('include', '/addContact');

        //check if the save button is disabled
        cy.get('.SaveButton').should('be.disabled');

        //fill half info
        cy.get('.ContactForm').within(function() {
            cy.get('Input[name="firstname"]').type('Krishna');
            cy.get('Input[name="lastname"]').type('Adhikari');
        });

        //check if the button is still disabled
        cy.get('button').should('be.disabled');

        //clear the form
        cy.get('.ContactForm').within(function(){
            cy.get('Input').clear();
        })

        //fill in the form with invalid data
        cy.get('.ContactForm').within(function(){
            cy.get('Input[name="firstname"]').type('Krishna!@#45');
            cy.get('Input[name="lastname"]').type('Adhikari2154');
        })

        //check if the button is still disabled
        cy.get('button').should('be.disabled');

        //check if the number of errors are 2
        cy.get('.formErrors').children().should('have.length',2);

        //add more invalid data
        cy.get('.ContactForm').within(function() {
            cy.get('Input[name="workphone"]').type('03666666111');
            cy.get('Input[name="mobile"]').type('0466666666123');
        });

        //check if the button is still disabled
        cy.get('button').should('be.disabled');

        //check if the number of errors are 4
        cy.get('.formErrors').children().should('have.length',4);


        //clear the form
        cy.get('.ContactForm').within(function(){
            cy.get('Input').clear();
        })

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

        //check if the page has been redirected to view details of the contact
        cy.url()
            .should('include', '/contact');
    });
});