describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions')

    cy.get('tbody tr').eq(2).should('have.attr', 'class');
    cy.get('tbody tr').eq(2).should('have.class', 'success');
    cy.get('tbody tr th').eq(2).should('have.attr', 'scope', 'row');
    cy.get('tbody tr td').eq(2).should('contain', 'Column content');



  })
})