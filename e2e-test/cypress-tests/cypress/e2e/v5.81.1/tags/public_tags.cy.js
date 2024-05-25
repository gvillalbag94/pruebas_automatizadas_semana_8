
const user = require('../../fixtures/user_ghost')

context('Functionality Post.', () => {
  beforeEach(() => {
  /* Given I navigate to page*/
    cy.visit('http://54.188.89.84/ghost/#/signin');
  })


  it('Create a new public tag', () => {
    // Given I enter my user 
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('./Screens_test/img50');
    // And I enter my password.
    cy.get('input[id="password"]').type(user.password);
    cy.screenshot('./Screens_test/img51');
    // And  click on Login.
    cy.get('button[type="submit"]').click();
    cy.screenshot('./Screens_test/img52');
    // And URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.screenshot('./Screens_test/img53');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img54');
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.screenshot('./Screens_test/img55');
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba')
        cy.screenshot('./Screens_test/img56');
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img57');
    cy.wait(3000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img58');
    cy.wait(3000);
    //Then I confirm that the tag was edit
    cy.get('.tags-list li:nth-last-child(2)').click();
    cy.screenshot('./Screens_test/img59');
    cy.wait(2000);
 })


 it('Edit a public tag', () => {
    // Given I enter my user 
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('./Screens_test/img60');
    // And I enter my password.
    cy.get('input[id="password"]').type(user.password);
    cy.screenshot('./Screens_test/img61');
    // And  click on Login.
    cy.get('button[type="submit"]').click();
    cy.screenshot('./Screens_test/img62');
    // And URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.screenshot('./Screens_test/img63');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img64');
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.screenshot('./Screens_test/img65');
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba');
        cy.screenshot('./Screens_test/img66');
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img67');
    cy.wait(2000); 
    // And I click in Tags
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img68');
    cy.wait(2000); 
    // And I click in tag
    cy.get('.tags-list li:nth-last-child(2)').click();
    cy.screenshot('./Screens_test/img69');
    cy.wait(2000);
    // When enter a description of tag
    cy.get('form').within(() => {
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type('descripción para el tag de prueba');
        cy.screenshot('./Screens_test/img70');
    })
    cy.wait(2000);
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img71');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img72');
    cy.wait(2000); 
    //Then I confirm that the tag was edit
    cy.get('.tags-list li:nth-last-child(2)').click();
    cy.screenshot('./Screens_test/img73');
    cy.wait(2000);
 })


 it('Delete a public tag', () => {
    // Given I enter my user 
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('./Screens_test/img74');
    // And I enter my password.
    cy.get('input[id="password"]').type(user.password);
    cy.screenshot('./Screens_test/img75');
    // And  click on Login.
    cy.get('button[type="submit"]').click();
    cy.screenshot('./Screens_test/img76');
    // And URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.screenshot('./Screens_test/img77');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img78');
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.screenshot('./Screens_test/img79');
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('NuevoTagDePrueba');
        cy.screenshot('./Screens_test/img80');
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img81');
    cy.wait(2000); 
    // And I click in Tags
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img82');
    cy.wait(2000); 
    // And I click in tag
    cy.get('.tags-list li:nth-last-child(2)').click();
    cy.screenshot('./Screens_test/img83');
    cy.wait(2000);
    // When I click in delete tag
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]').click();
    cy.screenshot('./Screens_test/img84');
    cy.wait(2000); 
    // And I confirm the action
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img85');
    cy.wait(7000);
    // Then I confirm that the tag doesn't exist
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img86');
    cy.wait(2000); 
 })

})
