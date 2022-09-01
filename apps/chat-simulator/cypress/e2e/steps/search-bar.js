import { Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../fixtures/home.page";

Then("I see the URL search input", () => {
  cy.get(homePage.searchBar).should("be.visible");
});
