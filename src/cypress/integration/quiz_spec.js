describe("Quiz App", () => {
  it("successfully loads", () => {
    cy.visit("/localhost:5173/"); // URL приложения
    cy.contains("vite"); // есть определенный текст
  });

  it("loads questions", () => {
    cy.request("https://opentdb.com/api_config.php")
      .its("body")
      .should("have.property", "results")
      .and("have.length", 10);
  });
});
