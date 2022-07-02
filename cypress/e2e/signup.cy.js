
describe('Signup flow', () => {
  it('should allow user to create a company account', async () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/register');
    cy.contains('Sign up as a company').click();
    cy.get('input[name="email"]').type("testEndCompany@gmail.com");
    cy.get('input[name="password"]').type("test123");
    cy.get('input[name="confirmPassword"]').type("test123");
    cy.contains('Register').click();
    cy.url().should('include', '/');
  })
  it('should allow user to create a developer account', async () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/register');
    cy.contains('Sign up as a developer').click();
    cy.get('input[name="email"]').type("testEndDev@gmail.com");
    cy.get('input[name="password"]').type("test123");
    cy.get('input[name="confirmPassword"]').type("test123");
    cy.contains('Register').click();
    cy.url().should('include', '/');
  })
})