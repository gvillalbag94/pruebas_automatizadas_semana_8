Feature: Edit a internal tag


@user1 @web
Scenario: Edit a internal tag
  Given I navigate to page "<HOST>"
  And I wait for 2 seconds
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click in sign in
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  And I click in internal tags
  And I wait for 2 seconds
  And I click in New Tag
  And I wait for 2 seconds
  And I enter a name of tag "#NuevoTagInternoDePrueba"
  And I wait for 2 seconds
  And I click in save
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  When I get the tag created
  And I wait for 2 seconds
  And I enter a description of tag "descripción para el tag interno de prueba"
  And I wait for 2 seconds
  And I click in save
  And I wait for 2 seconds
  And I click in Tags
  And I wait for 2 seconds
  Then I get the tag created
  And I wait for 2 seconds