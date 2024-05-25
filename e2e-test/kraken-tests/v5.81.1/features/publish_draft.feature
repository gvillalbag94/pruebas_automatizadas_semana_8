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
    And I click on the Edit Draft button
    And I wait for 3 seconds
    And I click on publish button
    And I wait for 3 seconds
    And I click on continue final review button
    And I wait for 3 seconds
    And I click on publish post button
    And I wait for 3 seconds
    And I click on Editor
    And I wait for 3 seconds
    And I click on Post
    And I wait for 3 seconds
    When I navigate to the published section
    And I wait for 3 seconds
    Then The draft was published
    And I wait for 3 seconds
    And I click on Profile
    And I wait for 3 seconds
    And I click on Logout
  

  

