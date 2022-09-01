import { When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../fixtures/home.page";

When(`I type {string} in the search bar and hit enter`, (url) => {
  cy.get(homePage.searchBar).type(url);
});
