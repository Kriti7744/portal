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
Cypress.Commands.add('Login', (user) => {
    cy.visit("/login");
    cy.get('input[name=email]').type(user.username)
    cy.get('input[name=password]').type(user.password)
    cy.get('[type="submit"]').first().click();
    cy.get("h3").first().should("have.text", "Dashboard");
  })

Cypress.Commands.add('Logout', () => {
    cy.get('#navbarDropdown').click();
    cy.get('#logout').click();
  })