describe("caesar app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://127.0.0.1:5500/index.html");
  });
  
  it(".dataCy command", () => {
    cy.dataCy("submit");
  });

  it("displays two todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("[data-cy=input-key]")
      .focus()
      .type("{uparrow}")
      .should("have.value", "2");

    cy.get("[data-cy=input-text]").type("abc").should("have.value", "abc");

    cy.get("[data-cy=button]").click();

    cy.get("[data-cy=input-result]").contains("cde");
  });
});
