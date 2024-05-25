
const user = require('../../fixtures/user_ghost')

context('Functionality Post.', () => {
  beforeEach(() => {
  /* Given I navigate to page*/
    cy.visit('http://54.188.89.84/ghost/#/signin');
  })

  it('Scenario List Post Published', () => {
    // I enter my user .
    cy.get('input[id="identification"]').type(user.email);
    // I enter my password.
    cy.get('input[id="password"]').type(user.password);
    // I click on Login.
    cy.get('button[type="submit"]').click();
    // La URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.wait(3000); 
    /*When*/
    //I navigate to the published section
    cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)').click();
    cy.wait(5000); 
    /*Then*/
    //The The drafts List
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

  it('Scenario List Post Drafts', () => {
    // I enter my user .
    cy.get('input[id="identification"]').type(user.email);
    // I enter my password.
    cy.get('input[id="password"]').type(user.password);
    // I click on Login.
    cy.get('button[type="submit"]').click();
    // La URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.wait(3000); 
    /*When*/
    //I navigate to the draft section
    cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
    cy.wait(5000); 
    /*Then*/
    //The The drafts List
    cy.get('body > div.gh-app > div > main > section > div > header > div > h2').should('be.visible').and('contain', 'Drafts');
    cy.wait(3000); 
    cy.get('h2[class="gh-canvas-title gh-post-title"]').should('be.visible').and('contain', 'Drafts');
    cy.wait(3000); 
    //I click on Profile
    /*cy.get('span[class="absolute dib ba b--white br-100 gh-whats-new-badge-account"]').click();*/
    cy.get('div[class="gh-user-avatar relative"]').click();
    cy.wait(3000); 
    //I click on Logout
    cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
    cy.wait(3000); 
  
  })

  it('Scenario List Post Scheduled', () => {
    // I enter my user .
    cy.get('input[id="identification"]').type(user.email);
    // I enter my password.
    cy.get('input[id="password"]').type(user.password);
    // I click on Login.
    cy.get('button[type="submit"]').click();
    // La URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.wait(3000); 
    /*When*/
    //I navigate to the Sheduled section
    cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(2)').click();
    cy.wait(5000); 
    //I click on Show all post
    cy.get('a[data-test-link="show-all"]').click();
    cy.wait(3000); 
    /*Then*/
    //The The Post List
    cy.get('h2[class="gh-canvas-title"]').should('be.visible').and('contain', 'Post');
    cy.wait(3000); 
    //I click on Profile
    cy.get('div[class="gh-user-avatar relative"]').click();
    cy.wait(3000); 
    //I click on Logout
    cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
    cy.wait(3000); 

 })
 




 
})
