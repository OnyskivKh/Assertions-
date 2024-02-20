let someVal;

describe('Cypress commands for querying elements ', () => {
    it('Actions', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/actions');

        cy.log('.type() command with options');
        cy.get('#email1').type('email');
        cy.get('.action-disabled').type('email', {force:true,delay:100}); // force можна використовувати в не активних полях, після кожного символу є затримка в 1 сек
        cy.get('#couponCode1').type('email{enter}');
        cy.get('.well').find('p').should('be.visible');

        cy.log('.focus() command');
        cy.get('#password1').should('not.have.class', 'focus');
        cy.get('#password1').prev().should('not.have.attr', 'style', 'color: orange;');
        cy.get('#password1').focus();
        cy.get('#password1').should('have.class', 'focus');
       // cy.get('#password1').prev().should('css', 'border-bottom-color', 'rgb(255, 165, 0)');
        cy.get('#password1').prev().should('have.attr', 'style', 'color: orange;');

        cy.log('.blur() command');
        cy.get('.action-blur').should('not.have.class', 'error');
        cy.get('.action-blur').prev().should('not.have.attr', 'style', 'color: red;');
      //  cy.get('.action-blur').focus();
        cy.get('.action-blur').blur({force:true});
        cy.get('.action-blur').should('have.class', 'error');
        // cy.get('.action-blur').prev().should('css', 'border-bottom-color', 'rgb(255, 165, 0)');
        cy.get('.action-blur').prev().should('have.attr', 'style', 'color: red;');

        cy.log('.clear() command');
        cy.get('.action-clear').type('Clear this').should('have.value', 'Clear this');
        cy.get('.action-clear').clear().should('have.value', '');

        cy.log('.submit() command');
        cy.get('#couponCode1').clear();
        cy.get('#couponCode1').type('Clear this').should('have.value', 'Clear this');
        cy.get('#couponCode1').parents('form').submit();
        cy.get('#couponCode1').parents('form').next().should('have.text', 'Your form has been submitted!');

        cy.log('.click() command');
        cy.get('[data-content="This popover shows up on click"]').click();
        cy.get('[id*="popover"]').should('contain', 'Popover').and('contain', 'This popover shows up on click');
        cy.get('#action-canvas').click();
        cy.get('#action-canvas').click('topRight');
        cy.get('#action-canvas').click('topLeft');
        cy.get('#action-canvas').click('top');
        cy.get('#action-canvas').click('bottom');
        cy.get('#action-canvas').click('bottomRight');
        cy.get('#action-canvas').click('bottomLeft');
        cy.get('#action-canvas').click('right');
        cy.get('#action-canvas').click('left');
        cy.get('#action-canvas').click(50, 50);

        //multiple click
        cy.get('.label-primary').click({multiple:true});

        cy.log('.check() command');
        cy.get('[type="checkbox"]').check({force: true}); // force for disabled checkbox
        cy.get('[type="checkbox"]').uncheck({force: true});

        cy.log('.select() command');
        cy.get('.action-select').select('apples').should('have.value', 'fr-apples');
        cy.get('.action-select').select('fr-oranges').should('have.value', 'fr-oranges');

        cy.log('.scrollIntoView() command');
        cy.get('#scroll-horizontal .btn-danger').should('exist').and('not.be.visible');
        cy.get('#scroll-horizontal .btn-danger').scrollIntoView({duration: 3000});
        cy.get('#scroll-horizontal .btn-danger').should('exist').and('be.visible');

        cy.get('#scroll-vertical .btn-danger').should('exist').and('not.be.visible');
        cy.get('#scroll-vertical .btn-danger').scrollIntoView();
        cy.get('#scroll-vertical .btn-danger').should('exist').and('be.visible');

        cy.get('#scroll-both .btn-danger').should('exist').and('not.be.visible');
        cy.get('#scroll-both .btn-danger').scrollIntoView();
        cy.get('#scroll-both .btn-danger').should('exist').and('be.visible');

        cy.log('.scrollTo() command');
        cy.get('#scrollable-horizontal').scrollTo('right');
        cy.get('#scrollable-vertical').scrollTo('bottom');
        cy.get('#scrollable-both').scrollTo('bottomRight');

        cy.log('.trigger() command');
        cy.get('.trigger-input-range').invoke('val', '75').trigger('change');
        cy.get('.trigger-input-range').next('p').should('have.text', 75);

















    })
})

