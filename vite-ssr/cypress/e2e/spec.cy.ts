describe('e2e tests os SSR-vite app', () => {
  it('should open site', () => {
    cy.visit('http://localhost:5173/')
  }),

  it('should have input', () => {
    cy.visit('/');
    cy.get('input').should('have.value', '');
  });

  it('should have button', () => {
    cy.visit('http://localhost:5173/');
    cy.get('button').should('have.length', 1);
  });

  it('should have links', () => {
    cy.visit('http://localhost:5173/');
    cy.get('a').should('have.length', 5);
  });
})