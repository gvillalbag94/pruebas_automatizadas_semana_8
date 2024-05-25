Feature: Members

@user1 @web
Scenario: Busqueda y eliminacion de un member
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
  And I enter text "Busqueda 1"
  And I wait for 2 seconds
  And I click on the email inputbox
  And I wait for 2 seconds
  And I enter text "Busqueda1@gmail.com"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  And I click members
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  And I click on the name inputbox
  And I wait for 2 seconds
  And I enter text "Busqueda 2"
  And I wait for 2 seconds
  And I click on the email inputbox
  And I wait for 2 seconds
  And I enter text "Busqueda2@gmail.com"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  And I click members
  And I wait for 2 seconds
  Then I click the search field
  And I wait for 2 seconds
  And I enter text "Busqueda"
  And I wait for 2 seconds
  And I select the member created 'Busqueda 1'
  And I wait for 2 seconds
  And I click the configuration button
  And I wait for 2 seconds
  And I click the delete button
  And I wait for 2 seconds
  And I click the confirm delete button
  And I wait for 5 seconds
  And I click dashboard
  And I wait for 2 seconds
  And I click members
  And I wait for 2 seconds
  And I test the second searched member is deleated
  And I wait for 2 seconds
  And I select the member created 'Busqueda 2'
  And I wait for 2 seconds
  And I click the configuration button
  And I wait for 2 seconds
  And I click the delete button
  And I wait for 2 seconds
  And I click the confirm delete button
  And I wait for 2 seconds
