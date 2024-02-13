
import textVariables from '../../fixtures/translation.json'

let locale = Cypress.env('CYPRESS_LOCALIZATION');
let strings = textVariables[locale];

it('Time test', () => {

    cy.log(`Приклад як можна менеджити різні локалізації в тестах. 
            Для того щоб змінити текст що вводиться в поля 
            потрібно змінили локалізацію у файлі .env на одну з тих,
            що вказані в файлі translations.json і перезапустити Сайпресс`);

    cy.log(locale);
    cy.log(strings);
    cy.log(strings.registerButtonText);
    cy.log(strings.loginButtonName);

    cy.visit(`https://sanitarskyi-ngx-admin.herokuapp.com/`);
    //     cy.visit(`https://sanitarskyi-ngx-admin.herokuapp.com/${process.env.CYPRESS_LOCALIZATON}`); змінна

    cy.clock();

    cy.get('[src="assets/images/dark-theme.jpg"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
    cy.get('ngx-toastr', {timeout: 15000}).should('be.visible');
    cy.get('div.col-md-6.col-sm-12  button.select-button').eq(0).click();
    cy.get(`nb-option[ng-reflect-value="top-right"]`).click();
    cy.get(`input[name="title"]`).clear();
    cy.get(`input[name="title"]`).type(strings.registerButtonText);
    cy.get(`input[name="content"]`).clear();
    cy.get(`input[name="content"]`).type(strings.loginButtonName);
    cy.get(`input[name="timeout"]`).clear();
    cy.get(`input[name="timeout"]`).type(60000);
    cy.contains('button', 'Show toast').click();

    cy.tick(60000);
    cy.get('nb-toast').should('not.be.visible');
})