
const user = require('../../fixtures/user_ghost')
context('Functionality Post.', () => {
  beforeEach(() => {
  /* Given I navigate to page*/
    cy.visit('http://54.188.89.84/ghost/');
  })


/*  */
  it('Scenario Publish Draft', () => {
    // I enter my user .
    cy.get('input[id="identification"]').type(user.email);
    // I enter my password.
    cy.get('input[id="password"]').type(user.password);
    // I click on Login.
    cy.get('button[type="submit"]').click();
    // La URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.wait(3000); 
    //I navigate to the draft section
    cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
    cy.wait(5000); 
    //I click on the Edit Draft button
    cy.get('body > div.gh-app > div > main > section > section > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1) ').click();
    cy.wait(5000); 
    //I click on publish button
    cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger > span').click();
    cy.wait(3000); 
    //I click on contnue final review button
    cy.get('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button').click();
    cy.wait(5000); 
    //I click on publish post button
    cy.get('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button > span ').click();
    cy.wait(3000); 
    //I click on Editor
    cy.get('body > div.epm-modal-container > div > div > header > button > span').click();
    cy.wait(3000); 
    //I click on Post'
    cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
    cy.wait(3000);
    /*When*/
    //I navigate to the published section
    cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)').click();
    cy.wait(5000); 
    /*Then*/
    //The draft was published
    cy.get('body > div.gh-app > div > main > section > div > header > div > h2').should('be.visible').and('contain', 'Published');
    cy.wait(3000); 
    cy.get('h2[class="gh-canvas-title gh-post-title"]').should('be.visible').and('contain', 'Published');
    cy.wait(3000); 
    //I click on Profile
    cy.get('div[class="gh-user-avatar relative"]').click();
    cy.wait(3000); 
    //I click on Logout
    cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
    cy.wait(3000); 


 })
 
})
