Feature: Members

  @user1 @web
  Scenario: Eliminacion de un member
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
    And I enter text "Prueba 2"
    And I wait for 2 seconds
    And I click on the email inputbox
    And I wait for 2 seconds
    And I enter text "prueba2@gmail.com"
    And I wait for 2 seconds
    And I click save
    And I wait for 2 seconds
    And I click members
    And I wait for 2 seconds
    And I click new member
    And I wait for 2 seconds
    And I click on the name inputbox
    And I wait for 2 seconds
    And I enter text "Prueba 3"
    And I wait for 2 seconds
    And I click on the email inputbox
    And I wait for 2 seconds
    And I enter text "prueba3@gmail.com"
    And I wait for 2 seconds
    And I click save
    And I wait for 2 seconds
    And I click members
    Then I click the second member "Prueba 2"
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
    And I test the second member created is deleated
    And I wait for 2 seconds

