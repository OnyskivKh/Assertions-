let someVal;

describe('Chai assertions', () => {
    it('Expect', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');

        //cy.wait(60000); // instead this use {timeout: ...}

        cy.log('.get command');

        cy.get('#query-btn').should('be.visible');
        cy.get('#query-btn', {timeout: 20000}).should('be.visible');

        cy.log('.contains command');

        cy.get('.query-list li:contains("apples")').should('be.visible');
        cy.contains('apples').should('be.visible');//finding just first element not all
        cy.get('.query-list li:contains("apples")').contains('more').should('be.visible');

        cy.contains('Apples', {matchCase: false}).should('be.visible'); // matchCase шукає строго по регістру

        cy.log('.within command')

        cy.get('input').should('have.length',3);
        cy.get('.query-form').within( form =>{
            cy.get('input').should('have.length',2); //відсіувє інші елементи до перевірки, схоже на .then


        })
        cy.log('.root command')

        cy.root().should('be.visible');
        cy.get('.query-form').within( form =>{
            cy.root().should('be.visible');


        })

    })
})


