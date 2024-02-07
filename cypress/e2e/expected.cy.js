describe('Chai assertions', () =>{
    it('Expect', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');

        cy.get('tbody tr').eq(2).then( tableRaw =>{
                expect(tableRaw).to.have.attr('class');
                expect(tableRaw).to.have.class('success');

        })

        cy.get('tbody tr th').eq(2).then( tableCell =>{
            expect(tableCell).to.have.attr('scope','row')

        })
        });
})