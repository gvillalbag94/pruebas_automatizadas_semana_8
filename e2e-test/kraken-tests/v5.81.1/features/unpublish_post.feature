Feature: Post

  @user1 @web
  Scenario: UnPublist a post
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
    And I click on the Edit Published register button
    And I wait for 3 seconds
    And I click on Unpublish
    And I wait for 3 seconds
    And I click on Unpublish and revert to private draft
    And I wait for 3 seconds
    And I click on Post
    And I wait for 3 seconds
    When I navigate to the draft section
    And I wait for 3 seconds
    Then The post was Unpublished
    And I wait for 3 seconds
    And I click on Profile
    And I wait for 3 seconds
    And I click on Logout
 
 
  

