Feature: Delete a public tag

@user1 @web
Scenario: Delete a public tag
  Given I navigate to page "<HOST>"
  And I wait for 2 seconds
  And I login with correct credentials "<EMAIL>" "<PASSWORD>"
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  And I click in New Tag
  And I wait for 2 seconds
  And I enter a name of tag "Nuevo tag de prueba"
  And I wait for 2 seconds
  And I click in save
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  And I get the tag created
  And I wait for 2 seconds
  When I click in delete tag
  And I wait for 2 seconds
  Then I confirm the action
  And I wait for 2 seconds