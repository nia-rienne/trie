import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../fixtures/home.page";

When("the chat replay section loads", () => {
  cy.get(homePage.chatReplayTitle).as("chatReplayTitle");
});

Then(`I see {string} in the chat replay section title`, (title) => {
  cy.get("@chatReplayTitle").should("have.text", title);
});
