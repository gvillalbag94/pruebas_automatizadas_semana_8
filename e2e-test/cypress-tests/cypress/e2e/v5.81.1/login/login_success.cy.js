const user = require('../../../fixtures/user_ghost')

context('Inicio de sesión exitoso por email y contraseña correctos.', () => {
  beforeEach(() => {
    cy.visit('http://54.188.89.84/ghost/');
  })

  it('Inicio de sesión exitoso con correo y password correcto', () => {
     // Seleccionar el campo del correo e ingresar un valor.
     cy.get('input[id="identification"]').type(user.email);
     cy.screenshot('../login_success/before_0');
    cy.wait(500);
    
     // Seleccionar el campo del password e ingresar un valor.
     cy.get('input[id="password"]').type(user.password);
     cy.screenshot('../login_success/before_1');
    cy.wait(500);
 
      // Seleccioanr el boton de inicio de sesion.
      cy.get('button[type="submit"]').click();
      cy.screenshot('../login_success/before_2');
    cy.wait(500);
 
     // La URL contiene la ruta de dashboard.
     cy.url().should('contain','/dashboard');
     cy.screenshot('../login_success/before_3');
    cy.wait(500);
  })
})
