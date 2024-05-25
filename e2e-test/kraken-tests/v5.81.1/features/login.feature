Feature: Como usuario inicio sesion con credenciales incorrectas, luego con 
  credenciales correctas, al entrar a la plataforma cierro sesión.

  @user1 @web
  Scenario: Como usuario inicio sesion con credenciales incorrectas, despues con credenciales correctas, luego cierro sesión.
    Given I navigate to page "<HOST>"
    And I wait for 2 seconds
    When I login with incorrect credentials
    And I wait for 2 seconds
    And I check a error message "There is no user with that email address."
    And I wait for 2 seconds
    When I login with correct credentials "<EMAIL>" "<PASSWORD>"
    And I wait for 5 seconds
    And I check go to the "dashboard" page
    And I open the profile settings
    When I select the sign out
    And I wait for 2 seconds
    Then I check return to the sign in page

  