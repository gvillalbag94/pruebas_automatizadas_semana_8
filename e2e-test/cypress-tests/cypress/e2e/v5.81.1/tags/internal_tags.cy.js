const user = require('../../fixtures/user_ghost')
context('Functionality Post.', () => {
    beforeEach(() => {
    /* Given I navigate to page*/
      cy.visit('http://54.188.89.84/ghost/#/signin');
    })
  
    
    it('Create a new internal tag', () => {
      // Given I enter my user 
      cy.get('input[id="identification"]').type(user.email);
      cy.screenshot('./Screens_test/img1');
      // And I enter my password.
      cy.get('input[id="password"]').type(user.password);
      cy.screenshot('./Screens_test/img2');
      // And  click on Login.
      cy.get('button[type="submit"]').click();
      cy.screenshot('./Screens_test/img3');
      // And URL contiene la ruta de dashboard.
      cy.url().should('contain','/dashboard');
      cy.screenshot('./Screens_test/img4');
      cy.wait(2000); 
      // And I click in Tags 
      cy.get('a[data-test-nav="tags"]').click();
      cy.screenshot('./Screens_test/img5');
      cy.wait(2000); 
      // And I click in internal tags 
      cy.get('button[class="gh-btn "]').click();
      cy.screenshot('./Screens_test/img6');
      cy.wait(2000); 
      // When I click in New Tag
      cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
      cy.screenshot('./Screens_test/img7');
      cy.wait(2000); 
      //And I enter a name of tag
      cy.get('form').within(() => {
          cy.get('input[id="tag-name"]').type('#NuevoTagInternoDePrueba');
          cy.screenshot('./Screens_test/img8');
      })
      cy.wait(2000); 
      // And I click in save
      cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
      cy.screenshot('./Screens_test/img9');
      cy.wait(3000); 
   })


   it('Edit a internal tag', () => {
    // Given I enter my user 
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('./Screens_test/img11');
    // And I enter my password.
    cy.get('input[id="password"]').type(user.password);
    cy.screenshot('./Screens_test/img12');
    // And  click on Login.
    cy.get('button[type="submit"]').click();
    cy.screenshot('./Screens_test/img1');
    // And URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.screenshot('./Screens_test/img13');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img14');
    cy.wait(2000); 
    // And I click in internal Tags 
    cy.get('button[class="gh-btn "]').click();
    cy.screenshot('./Screens_test/img15');
    cy.wait(2000); 
    // When I click in New Tag
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
    cy.screenshot('./Screens_test/img16');
    cy.wait(2000); 
    //And I enter a name of tag
    cy.get('form').within(() => {
        cy.get('input[id="tag-name"]').type('#NuevoTagInternoDePrueba');
        cy.screenshot('./Screens_test/img17');
    })
    cy.wait(2000); 
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img18');
    cy.wait(2000); 
    // And I click in Tags
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img19');
    cy.wait(2000); 
    // And I click in tag
    cy.get('.tags-list li:nth-last-child(2)').click();
    cy.screenshot('./Screens_test/img20');
    cy.wait(2000);
    // When enter a description of tag
    cy.get('form').within(() => {
        cy.get('textarea[class="gh-input gh-tag-details-textarea"]').type('descripción para el tag interno de prueba');
        cy.screenshot('./Screens_test/img21');
    })
    cy.wait(2000);
    // And I click in save
    cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
    cy.screenshot('./Screens_test/img22');
    cy.wait(2000); 
    // And I click in Tags 
    cy.get('a[data-test-nav="tags"]').click();
    cy.screenshot('./Screens_test/img23');
    cy.wait(2000); 
    //Then I confirm that the tag was edit
    cy.get('.tags-list li:nth-last-child(2)').click();
    cy.screenshot('./Screens_test/img24');
    cy.wait(2000);
 })
})