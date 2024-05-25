Feature: Members

@user1 @web
Scenario: Editar un member creado
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
  And I enter text "Prueba 4"
  And I wait for 2 seconds
  And I click on the email inputbox
  And I wait for 2 seconds
  And I enter text "prueba4@gmail.com"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  And I click members
  And I wait for 2 seconds
  And I click new member
  And I wait for 2 seconds
  And I click on the name inputbox
  And I wait for 2 seconds
  And I enter text "Prueba 5"
  And I wait for 2 seconds
  And I click on the email inputbox
  And I wait for 2 seconds
  And I enter text "prueba5@gmail.com"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  And I click members
  Then I select the member created 'Prueba 4'
  And I wait for 2 seconds
  And I clear the text on the name inputbox
  And I wait for 2 seconds
  And I enter text "Editado"
  And I wait for 2 seconds
  And I clear the text on the email inputbox
  And I wait for 2 seconds
  And I enter text "editado@gmail.com"
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  And I click dashboard
  And I wait for 2 seconds
  And I click members
  And I wait for 2 seconds
  And I test the second member is edited
  And I wait for 2 seconds
  And I select the member created 'Prueba 5'
  And I wait for 2 seconds
  And I click the configuration button
  And I wait for 2 seconds
  And I click the delete button
  And I wait for 2 seconds
  And I click the confirm delete button
  And I wait for 2 seconds
  And I select the member created 'Editado'
  And I wait for 2 seconds
  And I click the configuration button
  And I wait for 2 seconds
  And I click the delete button
  And I wait for 2 seconds
  And I click the confirm delete button
  And I wait for 2 seconds