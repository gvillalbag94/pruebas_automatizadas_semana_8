Feature: Post

  @user1 @web
  Scenario: UnPublist a post
    Given I navigate to page "<HOST>"
    And I wait for 3 seconds
    And I enter my user old version "<EMAIL>"
    And I wait for 3 seconds
    And I enter my password old version "<PASSWORD>"
    And I wait for 3 seconds
    And I click on Login old version
    And I wait for 3 seconds
    When I navigate to the published section old version
    And I wait for 3 seconds
    And I click on the Edit published button old version
    And I wait for 3 seconds
    And I click on unpublish button old version
    And I wait for 3 seconds
    And I click on Unpublish and revert to private draft old version
    And I wait for 3 seconds
    And I click on Unpublish update old version
    And I wait for 5 seconds
    And I click on Post published old version
    And I wait for 3 seconds
    When I navigate to the draft section old version
    And I wait for 3 seconds
    Then The post was Unpublished old version
    And I wait for 3 seconds
    And I click on Profile old version
    And I wait for 3 seconds
    And I click on Logout old version
 
 
  

