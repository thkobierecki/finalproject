describe("Company", () =>{
  it("should allow user to update the profile info", ()=>{
    cy.loginCompany();
    cy.visit("http://localhost:3000/company/panel/profile");
    cy.get('input[name="companyName"]').clear().type("Test Company");
    cy.get('textarea[name="introduction"]').clear().type("Test Company introduction");
    cy.get('input[name="companyLocation"]').clear().type("Swansea");
    cy.get('select[name="companyStage"]').select("Early stage (0-30)");
    cy.get('select[name="companyType"]').select("2");
    cy.get('select[name="industryType"]').select("1");
    cy.get('input[name="socials.website"]').clear().type("testcompany.com");
    cy.get('input[name="socials.linkedin"]').clear().type("linkedin.com/testcompany");
    cy.contains('Update Company Profile').click();
    cy.contains('Your company profile has been updated');
  })
  // it("should allow user to update preferences", ()=>{
  //   cy.loginCompany();
  //   cy.visit("http://localhost:3000/company/panel/preferences");
  // })
})