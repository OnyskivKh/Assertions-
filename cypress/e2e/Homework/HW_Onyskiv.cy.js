
 let testData =[ {
    position: '#nb-option-24', // top-right
        title: 'Test 1',
        content: 'Test content 1',
        time: '20000',
        toastType: '#nb-option-33' //success
},
     {
         position: '#nb-option-25', //top-left
         title: 'Test 2',
         content: 'Test content 2',
         time: '20000',
         toastType: '#nb-option-34' //info
     },
     {
         position: '#nb-option-26',// bottom-left
         title: 'Test 3',
         content: 'Test content 3',
         time: '20000',
         toastType: '#nb-option-35' //warning
     },
     {
         position: '#nb-option-27', // bottom-right
         title: 'Test 4',
         content: 'Test content 4',
         time: '20000',
         toastType: '#nb-option-36' //danger
     }]


let expectedResult=[
    {
        icon: 'checkmark',
            title: 'Test 1',
            content: 'Test content 1',
            color: 'rgb(0, 214, 143)',
            position1: 'flex-end',
            position2: 'flex-start'
    },
    {
        icon: 'question-mark',
        title: 'Test 2',
        content: 'Test content 2',
        color: 'rgb(0, 149, 255)',
        position1:'flex-start',
        position2: 'flex-start'
    },
    {
        icon: 'alert-triangle',
        title: 'Test 3',
        content: 'Test content 3',
        color: 'rgb(255, 170, 0)',
        position1: 'flex-start',
        position2: 'flex-end'
    },
    {
        icon: 'flash',
        title: 'Test 4',
        content: 'Test content 4',
        color: 'rgb(255, 61, 113)',
        position1: 'flex-end',
        position2: 'flex-end'
    }

]


describe('Check toasters', () => {
    before('Enter test page ', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[alt="Light Theme"].theme-preview').click();
        cy.get('a.ng-tns-c141-19').click();
        cy.get('a.ng-tns-c141-23').click();
    })

        it('Preconditions', () => {
            testData.forEach(testData => {
                cy.get('nb-card-body nb-select .select-button').first().click();
                cy.get(testData.position).click();
                cy.get('div.form-group input').eq(0).clear().type(`${testData.title}{enter}`);
                cy.get('div.form-group input').eq(1).clear().type(`${testData.content}{enter}`);
                cy.get('div.form-group input').eq(2).clear().type(`${testData.time}{enter}`);
                cy.get('button nb-icon [data-name="chevron-down"]').eq(2).click();
                cy.get(testData.toastType).click();
                cy.get('button.mat-ripple').first().click()

                })

            it('Test toasters appearance and position', () => {
                    expectedResult.forEach(expectedResult => {
                        cy.get('nb-toastr-container nb-toast').should('exist').then((toasterAppearance) => {
                            expect(tosterAppearance).contains(expectedResult.title)
                            expect(tosterAppearance).contains(expectedResult.content)
                            expect(tosterAppearance).to.have.attr('data-name', expectedResult.icon)
                            expect(tosterAppearance).to.have.css('background-color', expectedResult.color);
                            expect(tosterAppearance).to.have.css('justify-content', expectedResult.position1).and('align-items', expectedResult.position2);
                        })

                    })
            })

        })
        })


