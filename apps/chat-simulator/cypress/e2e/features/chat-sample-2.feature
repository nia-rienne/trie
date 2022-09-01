Feature: Chat Simulator Chat Replay

  Scenario: Chat replay is displayed
    Given I open Chat Simulator page
    When I type "http://localhost:6400/chat/2{enter}" in the search bar and hit enter
    Then I see "Taco" in the chat 2 replay
