let someVal;

describe('Chai assertions', () => {
    it('Expect', () => {
        cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/assertions');

        cy.get('tbody tr').eq(2).then(tableRaw => {
            expect(tableRaw).to.have.attr('class');
            expect(tableRaw).to.have.class('success');

        })

        cy.get('tbody tr th').eq(2).then(tableCell => {
            expect(tableCell).to.have.attr('scope', 'row')

        })
        cy.get('tbody tr').eq(2).then(tableRaw => {
            expect(tableRaw).to.have.attr('class');
            expect(tableRaw).to.have.class('success');

            expect(tableRaw.attr('class')).to.eq('success');
            expect(tableRaw.attr('class')).to.eql('success');
            expect(tableRaw.attr('class')).to.eqls('success');
            expect(tableRaw.attr('class')).to.equal('success');
            expect(tableRaw.attr('class')).to.equals('success');
        })
        cy.get('tbody tr td').eq(0).then( tableCell =>{

            expect(tableCell).to.contain('Column content');
            expect(tableCell).to.have.text('Column content');
            expect(tableCell).to.have.html('Column content');
            expect(tableCell).to.include.text('Column content');

            expect(tableCell).to.not.have.text('qwerty');

            expect(tableCell.text()).eq('Column content');


        })
    })

    it.skip('Compare different equals', () => {
        const obj = {
            name: 'Krystyna',
            age: '24'
        };
        const obj2 = {
            name: 'Krystyna',
            age: '24'
        }

        expect(obj).to.eql(obj2); // не строге порівняння
        expect(obj).to.eqls(obj2);
        //expect(obj).to.eq(obj2);
        //  expect(obj).to.equal(obj2); // строге порівння обєкту, стилю.типу
        // expect(obj).to.equals(obj2);

        const obj3 = obj;

        expect(obj).to.eql(obj3);
        expect(obj).to.eqls(obj3);
        expect(obj).to.eq(obj3);
        expect(obj).to.equal(obj3);
        expect(obj).to.equals(obj3);


    })
})
    //
    //         // cy.get('tbody tr th').eq(2).invoke('css', 'background-color').should('eq', 'rgb(223, 240, 216)');
    //         cy.get('tbody tr th').eq(2).invoke('css', 'background-color').as('backgroundColor');
    //         cy.get('tbody tr th').eq(2).then(tableRaw => {
    //             someVal = tableRaw.css('background-color');
    //         })
    //         // cy.get or $('') = same; Jquery says that find $('')
    //
    //         cy.get('@backgroundColor').should('eq', 'rgb(223, 240, 216)');
    //
    //     })
    //
    //     it('Expect', () => {
    //         cy.log(someVal);
    //     });
    // });


