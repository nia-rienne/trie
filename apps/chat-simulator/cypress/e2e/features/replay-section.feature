Feature: Chat Replay Section Title

  Scenario: Display the chat messages section
    Given I open Chat Simulator page
    When the chat replay section loads
    Then I see "Chat Replay" in the chat replay section title
