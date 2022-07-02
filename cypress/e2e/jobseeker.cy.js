describe("Job seeker", () => {
  it("should be able to create profile",()=>{
    cy.loginJobSeeker();
    cy.visit("http://localhost:3000/dev/panel/profile");
    cy.get('input[name="firstName"]').clear().type("John");
    cy.get('input[name="lastName"]').clear().type("Doe");
    cy.get('input[name="city"]').clear().type("Swansea");
    cy.get('textarea[name="introduction"]').clear().type("Hello Im a test developer. Im here to test if the feature is working");
    cy.get('input[name="linkedin"]').clear().type("linkedin.com");
    cy.get('input[name="github"]').clear().type("Github.com");
    cy.contains('Update Your Profile').click();
    cy.contains('Your profile has been updated');
  });
  it("should be able to update preferences", () => {
    cy.loginJobSeeker();
    cy.visit("http://localhost:3000/dev/panel/preferences");
    cy.contains('Early stage (0-30)').click();
    cy.contains('Fintech').click();
    cy.contains('B2B').click();
    cy.contains('SaaS').click();
    cy.contains('Senior').click();
    cy.contains('Permament').click();
    cy.get('input[name="minSalary"]').clear().type("60000");
    cy.get('input[name="maxSalary"]').clear().type("80000");
    cy.contains('JavaScript').click();
    cy.contains('Update your preferences').click();
    cy.contains('Your preferences has been updated');;
  })
  it("should be able to apply for a job", () => {
    cy.loginJobSeeker();
    cy.visit("http://localhost:3000/dev/panel/matchmaking");
    cy.contains("Apply").first().click();
    cy.contains("Already applied");
    cy.visit("http://localhost:3000/dev/panel/applications");
    cy.contains("Delete").first().click();
  })
})