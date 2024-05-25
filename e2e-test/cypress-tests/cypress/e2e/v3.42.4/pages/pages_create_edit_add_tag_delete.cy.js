const user = require('../../../fixtures/user_ghost')

context('Error en inicio de sesion por email y contraseña incorrecta.', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://52.42.171.94:3001/ghost/');
  })

  it('Creacion, editar añadir tag, eliminar una pagina.', () => {
      // Seleccionar el campo del correo e ingresar un valor.
      cy.get('input[name="identification"]').type(user.email);
      cy.screenshot('../create_edit_add_tag_delete/after_0');
      cy.wait(500);

      // Seleccionar el campo del password e ingresar un valor.
      cy.get('input[name="password"]').type(user.password);
      cy.screenshot('../create_edit_add_tag_delete/after_1');
      cy.wait(500);
  
       // Seleccioanr el boton de inicio de sesion.
       cy.get('button[type="submit"]').click();
      cy.screenshot('../create_edit_add_tag_delete/after_2');
      cy.wait(500);
  
      // La URL contiene la ruta de dashboard.
      cy.url().should('contain','/site');
      cy.screenshot('../create_edit_add_tag_delete/after_3');
      cy.wait(500);
  
      // Seleccioanr el boton de pages.
      cy.get('a[href="#/pages/"]').click();
    cy.screenshot('../create_edit_add_tag_delete/after_4');
      cy.wait(500);
  
    // La URL contiene la ruta de pages.
    cy.url().should('contain','/pages');
    cy.screenshot('../create_edit_add_tag_delete/after_5');
      cy.wait(500);
  
     // Seleccioanr el boton de pages.
     cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
     cy.screenshot('../create_edit_add_tag_delete/after_6');
      cy.wait(500);
  
     // La URL contiene la ruta de pages.
    cy.url().should('contain','/editor/page');
    cy.screenshot('../create_edit_add_tag_delete/after_7');
      cy.wait(500);
  
     // Seleccionar el campo del correo e ingresar un valor.
     cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('Example cypress page');
     cy.screenshot('../create_edit_add_tag_delete/after_8');
      cy.wait(500);
  
      cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type('Este es un ejemplo con cypress');
      cy.screenshot('../create_edit_add_tag_delete/after_9');
      cy.wait(500);
  
     cy.get('button[title="Settings"]').click();
  cy.screenshot('../create_edit_add_tag_delete/after_10');
      cy.wait(500);
  
      cy.get('input[id="url"]').clear();
      cy.get('input[id="url"]').type('example-cypress');
  cy.screenshot('../create_edit_add_tag_delete/after_11');
      cy.wait(500);
  
      cy.get('button[class="close settings-menu-header-action"]').click();
  cy.screenshot('../create_edit_add_tag_delete/after_12');
      cy.wait(500);
  
      cy.get('div[class="gh-publishmenu ember-view"]')
      .click();
     cy.screenshot('../create_edit_add_tag_delete/after_13');
      cy.wait(500);
  
      cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click();
      cy.screenshot('../create_edit_add_tag_delete/after_14');
     cy.wait(500);
  
     cy.get('button[class="gh-btn gh-btn-outline gh-btn-link"]').click();
     cy.screenshot('../create_edit_add_tag_delete/after_15');
     cy.wait(2000);
  
     cy.visit('http://52.42.171.94:3001/ghost/#/site');
    cy.screenshot('../create_edit_add_tag_delete/after_16');
    cy.wait(500);
  
      // Seleccioanr el boton de pages.
    cy.get('a[href="#/pages/"]').click();
    cy.screenshot('../create_edit_add_tag_delete/after_17');
    cy.wait(500);
  
    cy.get('section[class="content-list"]')
    .contains("Example cypress page")
    .click();
     cy.screenshot('../create_edit_add_tag_delete/after_18');
     cy.wait(500);
  
     cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').clear();
     cy.screenshot('../create_edit_add_tag_delete/after_19');
     cy.wait(500);
  
     cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]')
     .type('Edit TAG cypress page');
     cy.screenshot('../create_edit_add_tag_delete/after_20');
     cy.wait(1000);
  
    cy.get('button[title="Settings"]').click();
    cy.screenshot('../create_edit_add_tag_delete/after_21');
      cy.wait(500);
  
    cy.get('#tag-input > ul > input.ember-power-select-trigger-multiple-input')
    .type('News')
    .wait(500);
    cy.screenshot('../create_edit_add_tag_delete/after_22');
      cy.wait(500);
  
    cy.contains('li', 'News')
    .click();
    cy.screenshot('../create_edit_add_tag_delete/after_23');
      cy.wait(500);
  
      cy.get('button[class="close settings-menu-header-action"]').click();
    cy.screenshot('../create_edit_add_tag_delete/after_24');
    cy.wait(1000);
  
     cy.get('div[class="gh-publishmenu ember-view"]')
     .contains('Update')
    .click();
    cy.wait(500);
    
    cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]')
     .contains('Update')
    .click();
    cy.wait(500);
    cy.get('button[class="gh-btn gh-btn-outline gh-btn-link"]')
   .click();
    
    cy.screenshot('../create_edit_add_tag_delete/after_25');
    cy.wait(500);
  
    cy.get('a[href="#/pages/"]').click();
    cy.screenshot('../create_edit_add_tag_delete/after_26');
      cy.wait(500);
  
    cy.get('section[class="content-list"]')
    .contains("Edit TAG cypress page")
    .click();
    cy.screenshot('../create_edit_add_tag_delete/after_27');
    cy.wait(500);
  
     cy.get('button[title="Settings"]').click();
     cy.screenshot('../create_edit_add_tag_delete/after_28');
     cy.wait(500);
  
     cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click();
     cy.screenshot('../create_edit_add_tag_delete/after_29');
      cy.wait(500);
  
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click();
      cy.screenshot('../create_edit_add_tag_delete/after_30');
     cy.wait(500);
  
     cy.get('section[class="content-list"]')
     .should('not.contain',"Edit TAG cypress page");
     cy.screenshot('../create_edit_add_tag_delete/after_31');
      cy.wait(500);
})
})
