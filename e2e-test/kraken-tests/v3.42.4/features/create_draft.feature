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
    And I click on the New Draft button old version
    And I wait for 3 seconds
    Then I enter new Post Title old version "Elitesys"
    And I wait for 3 seconds
    And I click on settings old version
    And I wait for 3 seconds
    And I click on Post old version
    And I wait for 3 seconds
    And I click on Profile old version
    And I wait for 3 seconds
    And I click on Logout old version

  

  

