const user = require('../../../fixtures/user_ghost')

context('Crear una pagina validar que existe, elimanarla y validar que ya no existe', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://52.42.171.94:3001/ghost/');
  })

  it('Creacion, y eliminacion de una pagina.', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[name="identification"]').type(user.email);
    cy.screenshot('../create_delete_page/after_0');
   
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[name="password"]').type(user.password);
    cy.screenshot('../create_delete_page/after_1');

     // Seleccioanr el boton de inicio de sesion.
    cy.get('button[type="submit"]').click();
    cy.screenshot('../create_delete_page/after_2');

    cy.wait(500);

    // La URL contiene la ruta de site.
    cy.url().should('contain','/site');
    cy.screenshot('../create_delete_page/after_3');

    // Seleccioanr el boton de pages.
  cy.get('a[href="#/pages/"]').click();
  cy.screenshot('../create_delete_page/after_4');

  // La URL contiene la ruta de pages.
  cy.url().should('contain','/pages');

   // Seleccioanr el boton de pages.
   cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
   cy.screenshot('../create_delete_page/after_5');

   cy.wait(500);

   // La URL contiene la ruta de pages.
  cy.url().should('contain','/editor/page');

   // Seleccionar el campo del correo e ingresar un valor.
   cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('Example cypress page');
   cy.screenshot('../create_delete_page/after_6');
   cy.wait(500);

   cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type('Este es un ejemplo con cypress');
   cy.screenshot('../create_delete_page/after_7');
   cy.wait(500);

   cy.get('button[title="Settings"]').click();
   cy.screenshot('../create_delete_page/after_8');
   cy.wait(500);

   cy.get('input[id="url"]').clear();
   cy.get('input[id="url"]').type('example-cypress');
   cy.screenshot('../create_delete_page/after_9');
   cy.wait(500);

   cy.get('button[class="close settings-menu-header-action"]').click();
   cy.screenshot('../create_delete_page/after_10');
   cy.wait(500);

   cy.get('div[class="gh-publishmenu ember-view"]')
   .click();
   cy.screenshot('../create_delete_page/after_11');

   cy.wait(500);

   cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
   cy.screenshot('../create_delete_page/after_12');

   cy.wait(500);

   cy.get('button[class="gh-btn gh-btn-outline gh-btn-link"]').click();
   cy.screenshot('../create_delete_page/after_13');

   cy.wait(2000);

   cy.visit('http://52.42.171.94:3001/ghost/#/site');
  cy.screenshot('../create_delete_page/after_14');

   cy.wait(500);

    // Seleccioanr el boton de pages.
    cy.get('a[href="#/pages/"]').click();
  cy.screenshot('../create_delete_page/after_15');

   cy.wait(500);

   cy.get('section[class="content-list"]')
   .contains("Example cypress page")
   .click();
   cy.screenshot('../create_delete_page/after_16');

   cy.wait(500);

   cy.get('button[title="Settings"]').click();
   cy.screenshot('../create_delete_page/after_17');
   cy.wait(500);

   cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
   cy.screenshot('../create_delete_page/after_18');

   cy.wait(500);

   cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
   cy.screenshot('../create_delete_page/after_19');

   cy.get('section[class="content-list"]')
   .should('not.contain',"Example cypress page");
   cy.screenshot('../create_delete_page/after_20');
 })
})
