let inputData = [
    {
        testData: {
            position: '#nb-option-24',
            title: 'Test 1',
            content: 'Test content 1',
            time: '5000',
            toastType: '#nb-option-33'
        },
        expectedResult: {
            icon: 'checkmark',
            title: 'Test 1',
            content: 'Test content 1',
            color: 'rgb(0, 214, 143)',
            position1: 'normal',
            position2: 'center'
        }
    },
    {
        testData: {
            position: '#nb-option-25',
            title: 'Test 2',
            content: 'Test content 2',
            time: '5000',
            toastType: '#nb-option-34'
        },
        expectedResult: {
            icon: 'question-mark',
            title: 'Test 2',
            content: 'Test content 2',
            color: 'rgb(0, 149, 255)',
            position1: 'normal',
            position2: 'center'
        }
    },
    {
        testData: {
            position: '#nb-option-26',
            title: 'Test 3',
            content: 'Test content 3',
            time: '5000',
            toastType: '#nb-option-35'
        },
        expectedResult: {
            icon: 'alert-triangle',
            title: 'Test 3',
            content: 'Test content 3',
            color: 'rgb(255, 170, 0)',
            position1: 'normal',
            position2: 'center'
        }
    },
    {
        testData: {
            position: '#nb-option-27',
            title: 'Test 4',
            content: 'Test content 4',
            time: '5000',
            toastType: '#nb-option-36'
        },
        expectedResult: {
            icon: 'flash',
            title: 'Test 4',
            content: 'Test content 4',
            color: 'rgb(255, 61, 113)',
            position1: 'normal',
            position2: 'center'
        }
    }
];

describe('Check toasters', () => {
    before('Enter test page', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[alt="Light Theme"].theme-preview').click();
        cy.get('a.ng-tns-c141-19').click();
        cy.get('a.ng-tns-c141-23').click();
    });

    it('Preconditions', () => {
        inputData.forEach(inputData => {
            cy.get('nb-card-body nb-select .select-button').first().click();
            cy.get(inputData.testData.position).click();
            cy.get('div.form-group input').eq(0).clear().type(`${inputData.testData.title}{enter}`);
            cy.get('div.form-group input').eq(1).clear().type(`${inputData.testData.content}{enter}`);
            cy.get('div.form-group input').eq(2).clear().type(`${inputData.testData.time}{enter}`);
            cy.get('button nb-icon [data-name="chevron-down"]').eq(2).click();
            cy.get(inputData.testData.toastType).click();
            cy.get('button.mat-ripple').first().click();
            cy.get('nb-toastr-container nb-toast').should('exist').then(toasterAppearance => {
                expect(toasterAppearance.find('.icon-container g [data-name]')).to.have.attr('data-name', inputData.expectedResult.icon);
                expect(toasterAppearance).to.contain(inputData.expectedResult.title);
                expect(toasterAppearance).to.contain(inputData.expectedResult.content);
                expect(toasterAppearance).to.have.css('justify-content', inputData.expectedResult.position1);
                expect(toasterAppearance).to.have.css('align-items', inputData.expectedResult.position2);
                cy.get('nb-toastr-container nb-toast').click();
            });
        });
    });
    });