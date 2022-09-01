import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../fixtures/home.page";

When("the page title loads", () => {
  cy.get(homePage.windowTitle).as("windowTitle");
});

Then(`I see {string} in the title`, (title) => {
  cy.get("@windowTitle").should("have.text", title);
});
