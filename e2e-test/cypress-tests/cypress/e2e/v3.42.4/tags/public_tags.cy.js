
const user = require('../../fixtures/user_ghost')

context('Functionality Post.', () => {
  beforeEach(() => {
  /* Given I navigate to page*/
    cy.visit('http://52.42.171.94:3001/ghost/#/signin');
  })


  it('Create a new public tag', () => {
    // Given I enter my user 
    cy.get('#ember8').type(user.email);
    cy.screenshot('./Screens_test/img100');
    // And I enter my password.
    cy.get('#ember10').type(user.password);
    cy.screenshot('./Screens_test/img101');
    // And  click on Login.
    cy.get('#ember12').click();
    cy.screenshot('./Screens_test/img102');
    // And URL contiene la ruta de dashboard.
    //cy.url().should('contain','/dashboard');
    cy.screenshot('./Screens_test/img103');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[href="#/tags/"]').click();
    cy.screenshot('./Screens_test/img104');
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
    cy.screenshot('./Screens_test/img105');
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba')
        cy.screenshot('./Screens_test/img106');
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img107');
    cy.wait(3000); 
 })



 it('Delete a public tag', () => {
    // Given I enter my user 
    // Given I enter my user 
    cy.get('#ember8').type(user.email);
    cy.screenshot('./Screens_test/img100');
    // And I enter my password.
    cy.get('#ember10').type(user.password);
    cy.screenshot('./Screens_test/img101');
    // And  click on Login.
    cy.get('#ember12').click();
    cy.screenshot('./Screens_test/img102');
    // And URL contiene la ruta de dashboard.
    cy.screenshot('./Screens_test/img103');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[href="#/tags/"]').click();
    cy.screenshot('./Screens_test/img104');
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
    cy.screenshot('./Screens_test/img105');
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba')
        cy.screenshot('./Screens_test/img106');
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img107');
    cy.wait(2000); 
    // When I click in delete tag
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click();
    cy.screenshot('./Screens_test/img84');
    cy.wait(2000); 
    // And I confirm the action
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img85');
    cy.wait(2000);
 })

})
