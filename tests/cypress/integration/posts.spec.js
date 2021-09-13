describe('posts page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders markdown posts', () => {
    cy.findByRole('link', { name: 'posts' }).click();
    cy.findByText('A New Website').should('exist');
    cy.findByText('A New Website').click();
  });

  it('navigates between markdown posts', () => {
    cy.visit('/posts/a-new-website');
    cy.findByText('Previous').should('exist');
    cy.findByText(/Taking Notes/).should('exist');
    cy.findByRole('link', { name: 'Blog' }).click();
    cy.findByText(/Taking Notes/).should('exist');
    cy.findByText('A New Website').should('exist');
  });
});
