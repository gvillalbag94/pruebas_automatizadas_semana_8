const user = require('../../../fixtures/user_ghost')

context('Crear una pagina validar que existe, elimanarla y validar que ya no existe', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://54.188.89.84/ghost/');
  })

  it('Creacion, y eliminacion de una pagina.', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('../create_delete_page/before_0');
   
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.password);
    cy.screenshot('../create_delete_page/before_1');


     // Seleccioanr el boton de inicio de sesion.
    cy.get('button[type="submit"]').click();
    cy.screenshot('../create_delete_page/before_2');


    cy.wait(500);

    // La URL contiene la ruta de dashboard.
    cy.url().should('contain','/dashboard');
    cy.screenshot('../create_delete_page/before_3');


    // Seleccioanr el boton de pages.
  cy.get('a[href="#/pages/"]').click();
  cy.screenshot('../create_delete_page/before_4');


  // La URL contiene la ruta de pages.
  cy.url().should('contain','/pages');

   // Seleccioanr el boton de pages.
   cy.get('a[href="#/editor/page/"]').click();
   cy.screenshot('../create_delete_page/before_5');


   cy.wait(500);

   // La URL contiene la ruta de pages.
  cy.url().should('contain','/editor/page');

   // Seleccionar el campo del correo e ingresar un valor.
   cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Example cypress page');
   cy.screenshot('../create_delete_page/before_6');

   cy.get('div[class="kg-prose"]').type('Este es un ejemplo con cypress');
   cy.screenshot('../create_delete_page/before_7');


   cy.get('button[title="Settings"]').click();
   cy.screenshot('../create_delete_page/before_8');


   cy.get('input[id="url"]').type('example-cypress');
   cy.screenshot('../create_delete_page/before_9');


   cy.get('button[title="Settings"]').click();
   cy.screenshot('../create_delete_page/before_10');


   cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger[data-test-button="publish-flow"]')
   .contains('Publish')
   .click();
   cy.screenshot('../create_delete_page/before_11');


   cy.wait(500);

   cy.get('button[data-test-button="continue"]').click();
   cy.screenshot('../create_delete_page/before_12');


   cy.wait(500);

   cy.get('button[data-test-button="confirm-publish"]').click();
   cy.screenshot('../create_delete_page/before_13');


   cy.wait(2000);

   cy.get('a[class="ember-view gh-back-to-editor"]') // Aumentar el tiempo de espera a 10 segundos
  .contains('Back to dashboard')
  .click();
  cy.screenshot('../create_delete_page/before_14');


   cy.wait(500);

    // Seleccioanr el boton de pages.
  cy.get('a[href="#/pages/"]').click();
  cy.screenshot('../create_delete_page/before_15');


   cy.wait(500);

   cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
   .contains("Example cypress page")
   .click();
   cy.screenshot('../create_delete_page/before_16');


   cy.wait(500);

   cy.get('button[title="Settings"]').click();
   cy.screenshot('../create_delete_page/before_17');


   cy.get('button[data-test-button="delete-post"]').click();
   cy.screenshot('../create_delete_page/before_18');


   cy.wait(500);

   cy.get('button[data-test-button="delete-post-confirm"]').click();
   cy.screenshot('../create_delete_page/before_19');


   cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
   .should('not.contain',"Example cypress page");
   cy.screenshot('../create_delete_page/before_20');

 })
})
