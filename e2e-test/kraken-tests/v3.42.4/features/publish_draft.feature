Feature: Post

  @user1 @web
  Scenario: Publish a draft
    Given I navigate to page "<HOST>"
    And I wait for 3 seconds
    And I enter my user old version "<EMAIL>"
    And I wait for 3 seconds
    And I enter my password old version "<PASSWORD>"
    And I wait for 3 seconds
    And I click on Login old version
    And I wait for 3 seconds
    When I navigate to the draft section old version
    And I wait for 3 seconds
    And I click on the Edit Draft button old version
    And I wait for 3 seconds
    And I click on publish button old version
    And I wait for 3 seconds
    And I click on continue final review button old version
    And I wait for 3 seconds
    And I click on Post old version
    And I wait for 3 seconds
    When I navigate to the draft section old version
    And I wait for 3 seconds
    When I navigate to the draft section old version
    And I wait for 3 seconds
    When I navigate to the published section old version
    And I wait for 3 seconds
    Then The draft was published old version
    And I wait for 3 seconds
    And I click on Profile old version
    And I wait for 3 seconds
    And I click on Logout old version
  

  

