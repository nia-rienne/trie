import { Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../fixtures/home.page";

Then("I see {string} in the chat 1 replay", (messageText) => {
  cy.get(homePage.message).should("include.text", messageText);
});
