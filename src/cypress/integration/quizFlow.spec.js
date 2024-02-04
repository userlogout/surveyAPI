describe("Quiz Flow", () => {
  it("completes the quiz", () => {
    cy.visit("/localhost:5173/");
    cy.contains("Start Quiz").click();
    cy.contains("Question 1");
    cy.get('input[type="radio"]').first().check();
    cy.contains("Submit Answer").click();
    cy.contains("Your score is:");
  });
});
