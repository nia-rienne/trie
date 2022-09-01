Feature: Chat Simulator Server

  Scenario: Make a GET request to the chat server api 
    When I make a request to the chat server
    Then I see "Welcome to Chat Server!" in the response