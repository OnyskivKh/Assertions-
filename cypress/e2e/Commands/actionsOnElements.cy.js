let someVal;

describe('Cypress commands for querying elements ', () => {
    it('Actions', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/actions');

        cy.get('#email1').type('email');
        cy.get('.action-disabled').type('email', {force:true,delay:100}); // force можна використовувати в не активних полях, після кожного символу є затримка в 1 сек
        cy.get('#couponCode1').type('email{enter}');
        cy.get('.well').find('p').should('be.visible');

        cy.get('#password1').should('not.have.class', 'focus');
        cy.get('#password1').prev().should('not.have.attr', 'style', 'color: orange;');
        cy.get('#password1').focus();
        cy.get('#password1').should('have.class', 'focus');
       // cy.get('#password1').prev().should('css', 'border-bottom-color', 'rgb(255, 165, 0)');
        cy.get('#password1').prev().should('have.attr', 'style', 'color: orange;');


    })
})

