Feature: Chat Simulator Chat Replay

  Scenario: Chat replay is displayed
    Given I open Chat Simulator page
    When I type "http://localhost:6400/chat/1{enter}" in the search bar and hit enter
    Then I see "USA!" in the chat 1 replay
