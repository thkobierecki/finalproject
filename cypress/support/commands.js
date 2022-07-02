/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("loginCompany",()=>{
  cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");

	// Set the cookie for cypress.
	// It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
	// This step can probably/hopefully be improved.
	// We are currently unsure about this part.
	// We need to refresh this cookie once in a while.
	// We are unsure if this is true and if true, when it needs to be refreshed.
	cy.setCookie("next-auth.session-token", "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..DU4Djv5xtCg0YFWi.jJsjfoNOtCRpSj9LphadByq7Q-6zM2VfeLdbvKkaLfPJL_r1lzXjBgzKeS5z8hTp3soyICkXuGDfQILxwiEc1WersEmCn9vFS8RRszH4RcqZVLPYKQRBABkmhHdHLuIrW11a_kqYj_PI53XpuVDekH3Lr6AIDOiCarNmVJn8ss1JEeO7BQ4IcO8ZyL4QUQF3_ESVRNyHHGa4S1bRu3bjfJ8JGd0yO8La429Zv5Laz-fD_zE6qmqdxgE46N0ZFBlsf0byANj4RnML5fAr4q67cBeN8j1nWdt8DUyJw0nbwqwqLJtU9SJB4VHYB9jCdVbgDoErg0114OOGNTh3QbGe8Mt9e2o-1BZ4adF6WKm7B5UaTnhcNapyv_UEKaGNkOWF9mJhNz6KcyWK1pFndh_ThCZJb84tkJTy20JXAbL3LCWtI7dR1-zFc_c-lLX6wzRr_YfXueeo0IR4t63mA0z_87U6J6IJaXjHXEPOyEwRmFjsN8uXt1y0fQM1hXwtTlMzYEr65DW0DnbjQSvRlAnLGdLoqYNf8IP4QhY2f3PrZbnnUugkFbeHtiYDxWVat-borgDnc0Y7MtOJ2CYY2wfck8K7c_Ms7OEGsHONo5r6F_V57gsB.mjPxLqiDpxthmtF-qBCx3A");
	cy.setCookie("next-auth.csrf-token", "3b6d9c7171c0a8db4c96d98d2c43cd1e367498e35ca75ec021c34841898a7471%7Cb16e3759e7db813fff968bc7587d3a0ba2a6efd048b7b719485c8528a3135a2f")
	
});

Cypress.Commands.add("loginJobSeeker",()=>{
  cy.intercept("/api/auth/session", { fixture: "session.json" }).as("session");

	// Set the cookie for cypress.
	// It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
	// This step can probably/hopefully be improved.
	// We are currently unsure about this part.
	// We need to refresh this cookie once in a while.
	// We are unsure if this is true and if true, when it needs to be refreshed.
	cy.setCookie("next-auth.session-token", "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..9ZSey-TUdNG4QsWz.93OB6Zx4CjoKw5ZqtqV7ZL7QttZqQOJxAojW0E5DyXBTrGf_pp2DC52v1PAE7bjn7QKWvZXdfZ8uy7g4A3wlfklS9tfmCwjBWL3TtznY-G-CCP5dQPp2gzOwFTUMRhqT3HJFts2GlHOduuZcNFD2UpjCK4V502ocloYCLp7ggLJG13X1xsfx9Rie5spZUAp2HzAJ-9QCuUzaZrean6zeRF2V8unpttfYfU6igemgxw0NBkn86eaQOuA1ASZNP2vu2EQposFeKJsWOrTmK-GOnvga8I5wR2GkvTNZypL3rl6Y4F3s2tyjs0jDcEg16NQHtm6MyWBG__Yp3dqjcRgUZa7Y5zfON8cF3NMk7AHQfjrhY4XMy6mPZKjECEB1_oTvo2plqmmw9FmFcOGUPR55OTJa9DzdDZJyIEVccFyzWoifaTleZHNauBUK77w8sLotN_AKJyArcivu9yR9rSnHyPTiMIYlLOydc_WhvImiVZGMZbjEdpPIAvS9TYqvjATUZXkzWORjbE7Ilpo16oSRb_KosoNL-bpE214B4mYpzhT4wK0tT2L_AO2x_pSLw4NKy1am4gcUWll5jN9FyFIoyX-VAlmlZReNfKmAOyLV.--7SM05oqFRUrr4HBPkcgQ");
	cy.setCookie("next-auth.csrf-token", "3b6d9c7171c0a8db4c96d98d2c43cd1e367498e35ca75ec021c34841898a7471%7Cb16e3759e7db813fff968bc7587d3a0ba2a6efd048b7b719485c8528a3135a2f")
	
});