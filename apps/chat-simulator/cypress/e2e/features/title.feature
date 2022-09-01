Feature: Chat Simulator Page Title

  Scenario: Opening the Chat Simulator page
    Given I open Chat Simulator page
    When the page title loads
    Then I see "Chat Simulator" in the title
