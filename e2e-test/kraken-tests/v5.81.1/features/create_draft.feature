Feature: Post

  @user1 @web
  Scenario: Publish a draft
    Given I navigate to page "<HOST>"
    And I wait for 3 seconds
    And I enter my user "<EMAIL>"
    And I wait for 3 seconds
    And I enter my password "<PASSWORD>"
    And I wait for 3 seconds
    And I click on Login
    And I wait for 3 seconds
    When I navigate to the draft section
    And I wait for 3 seconds
    And I click on the New Draft button
    And I wait for 3 seconds
    Then I enter new Post Title "Tittle"
    And I wait for 2 seconds
    And I click on settings
    And I wait for 5 seconds
    And I click on Post
    And I wait for 3 seconds
    And I click on Profile
    And I wait for 5 seconds
    And I click on Logout

  

  

