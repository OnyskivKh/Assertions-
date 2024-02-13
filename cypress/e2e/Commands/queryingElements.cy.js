let someVal;

describe('Cypress commands for querying elements ', () => {
    it.skip('Querying', () => {
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

    it('Traversal', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/traversal');

        cy.get('.traversal-breadcrumb').children('li').should('have.length', 3);
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
        cy.get('.traversal-list li').eq(0).should('have.text', 'tabby');
        cy.get('.traversal-list li').eq(-1).should('have.text', 'burmese');
        cy.get('.traversal-nav').children('li').filter(':not(.active)');
        cy.get('.traversal-pagination').find('span').eq(-1).should('have.text', '»');
        cy.get('.traversal-ul').find('.second').next().should('have.text', 'bananas');
        cy.get('.traversal-next-all').find('.second').next().should('have.text', 'bananas');
        cy.get('.traversal-next-all').find('.second').nextAll().should('have.length', 3);
        cy.get('.healthy-foods #fruits').nextUntil('#veggies').should('have.length', 3);
        cy.get('.traversal-mark').parent().should('have.text', 'Morbi leo risus, porta ac consectetur ac, highlight vestibulum at eros.');
        cy.get('.traversal-cite').parents('blockquote').then( element => {
            let expectedText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Someone famous in Source Title';
            expect(element.text().replace(/\s/g, '')).eq(expectedText.replace(/\s/g, '')); // replace(/\s/g, '') remove spaces
        })
        cy.get('.traversal-pills .active').siblings().should('have.length', 2);







        // to find another objects .traversal-nav li:not(.active)


    })
})

