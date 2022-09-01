import { When, Then } from "cypress-cucumber-preprocessor/steps";

const chatServer = "http://localhost:6400";

When("I make a request to the chat server", () => {
  cy.request(chatServer).then((resp) => {
    expect(resp.status).to.eq(200);
  });
});

Then(`I see {string} in the response`, (title) => {
  cy.request(chatServer).then((resp) => {
    expect(resp.body).to.include(title);
  });
});
