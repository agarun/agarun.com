// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('waitForApp', () => {
  // Wait for all the JavaScript payloads to be lazily loaded inside the shell.
  // https://github.com/cypress-io/cypress/issues/5743#issuecomment-609972751
  cy.get('main', { log: true, timeout: 10000 }).should(($main) => {
    expect($main[0].childElementCount).to.be.greaterThan(0);
  });
});

Cypress.Commands.add('waitForAppAfterVisit', (newPath) => {
  cy.location('pathname').should('equal', newPath);
  cy.waitForApp();
});
