Feature: Como usuario puedo crear una nueva pagina, ver la pagina en la lista de paginas, editarla
    y ver que existe con su nuevo nombre y eliminarla.

  @user1 @web
  Scenario: Como usuario inicio sesion con credenciales correctas, creo una pagina, luego la veo en la lista de paginas, luego la edito, confirmo que existe con su nuevo nombre, luego la elimino.
    Given I navigate to page "<HOST>"
    And I wait for 2 seconds
    When I login with correct credentials "<EMAIL>" "<PASSWORD>"
    And I wait for 2 seconds
    And I go to pages screen
    When I select go to the page form
    And I fill the title "Example page" and description
    And I open-close the page settings
    And I fill a page url "example"
    And I open-close the page settings
    And I publish the page
    And I confirm the publish page
    And I wait for 2 seconds
    And I return to the dashboard
    And I wait for 2 seconds
    And I go to pages screen
    And I wait for 2 seconds
    Then I check exist the page with name "Example page"
    And I wait for 2 seconds
    And I open the page with name "Example page"
    And I edit the title with the name "Page with TAG"
    And I open-close the page settings
    And I choose a Tag
    And I wait for 2 seconds
    And I open-close the page settings
    And I update the page
    And I wait for 2 seconds
    And I return to the pages screens
    And I wait for 2 seconds
    And I open the page with name "Page with TAG"
    And I open-close the page settings
    And I deleted the page
    And I wait for 2 seconds
    Then I check not exist the page with name "Page with TAG"
    