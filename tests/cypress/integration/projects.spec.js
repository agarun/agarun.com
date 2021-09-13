describe('projects page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders markdown projects', () => {
    cy.findByRole('link', { name: 'projects' }).click();

    cy.waitForAppAfterVisit('/projects');

    cy.findAllByRole('article').its('length').should('be.gte', 4);
  });
});
