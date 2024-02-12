describe('Chai assertions', () => {
    it('Expect', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');

         cy.url().should('eq', 'https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');

cy.location().then (location =>{

    expect(location.href).eq('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');
    expect(location.port).eq('');
    expect(location.hostname).eq('sanitarskyi-cypress-g2.herokuapp.com') ;//localhost
    expect(location.host).eq('sanitarskyi-cypress-g2.herokuapp.com'); //localhost:post
    expect(location.hash).eq(''); //hashtag
    expect(location.pathname).eq('/commands/assertions');
    expect(location.origin).eq('https://sanitarskyi-cypress-g2.herokuapp.com');
    expect(location.protocol).eq('https:');
    expect(location.search).eq(''); //? param=value

})
        cy.location('protocol').should('eq','https:');

    })
})