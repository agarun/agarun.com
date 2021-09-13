describe('switching color modes', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('switches to dark mode', () => {
    cy.findByRole('button').click();

    cy.get('body').should('have.class', 'dark');
    cy.get('body').should('not.have.class', 'light');
  });

  it('keeps dark mode on after switching', () => {
    cy.findByRole('button').click();

    cy.get('body').should('have.class', 'dark');
    cy.get('body').should('not.have.class', 'light');

    cy.reload();

    cy.get('body').should('have.class', 'dark');
    cy.get('body').should('not.have.class', 'light');
  });
});
