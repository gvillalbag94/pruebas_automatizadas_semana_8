Feature: Members

@user1 @web
Scenario: Creación de un Member
  Given I navigate to page "<HOST>"
  And I wait for 5 seconds
  When I enter identification "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click members
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  And I click on the name inputbox
  And I wait for 2 seconds
  And I enter text "Prueba"
  And I wait for 2 seconds
  And I click on the email inputbox
  And I wait for 2 seconds
  And I enter text "prueba@gmail.com"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  Then I click the logo
  And I wait for 2 seconds
  And I click log out
  And I wait for 5 seconds
  And I enter identification "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 5 seconds
  And I click members
  And I wait for 2 seconds
  And I test the new member exists
  And I wait for 2 seconds
  And I select the member created 'Prueba'
  And I wait for 2 seconds
  And I click the configuration button
  And I wait for 2 seconds
  And I click the delete button
  And I wait for 2 seconds
  And I click the confirm delete button
  And I wait for 5 seconds

