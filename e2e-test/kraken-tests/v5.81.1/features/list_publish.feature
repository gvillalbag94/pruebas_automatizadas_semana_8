Feature: Post

  @user1 @web
  Scenario: List Posts (Published)
    Given I navigate to page "<HOST>"
    And I wait for 3 seconds
    And I enter my user "<EMAIL>"
    And I wait for 3 seconds
    And I enter my password "<PASSWORD>"
    And I wait for 3 seconds
    And I click on Login
    And I wait for 3 seconds
    When I navigate to the published section
    And I wait for 3 seconds
    Then The published List
    And I wait for 3 seconds
    And I click on Profile
    And I wait for 3 seconds
    And I click on Logout
  

