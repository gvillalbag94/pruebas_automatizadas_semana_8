Feature: Members

@user1 @web
Scenario: Filtro para listar un member por tag
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
  And I enter text "Filtro 1"
  And I wait for 2 seconds
  And I click on the email inputbox
  And I wait for 2 seconds
  And I enter text "Filtro1@gmail.com"
  And I wait for 2 seconds
  And I click on the label inputbox
  And I wait for 2 seconds
  And I enter text "label1"
  And I wait for 2 seconds
  And I click on Add label1
  And I wait for 2 seconds
  And I click save
  And I wait for 2 seconds
  And I click members
  And I wait for 2 seconds
  Then I click the filter button
  And I wait for 2 seconds
  And I click the first selector
  And I wait for 2 seconds
  And I click the Label option
  And I wait for 2 seconds
  And I click the search inputbox
  And I wait for 2 seconds
  And I click the label1 option
  And I wait for 2 seconds
  And I click Apply filters
  And I wait for 2 seconds
  And I test the Filter member is listed
  And I wait for 2 seconds
  And I select the member created 'Filtro 1'
  And I wait for 2 seconds
  And I click the configuration button
  And I wait for 2 seconds
  And I click the delete button
  And I wait for 2 seconds
  And I click the confirm delete button
  And I wait for 2 seconds