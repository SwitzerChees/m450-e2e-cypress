/// <reference types="cypress" />

describe("Test Amazona Webshop", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.visit("http://localhost:3000/signin");
  });

  it("Test Login of Admin User", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get('input[id="email"]').type("admin@example.com", { delay: 100 });
    cy.get('input[id="password"]').type("1234", { delay: 100 });
    cy.get("main button[type=submit]").click();
    cy.url().should("include", "/");
    cy.get("div.dropdown a").contains("Basir");
  });
});
