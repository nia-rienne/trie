import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I open Chat Simulator page", () => {
  cy.visit("http://localhost:3000/");
});
