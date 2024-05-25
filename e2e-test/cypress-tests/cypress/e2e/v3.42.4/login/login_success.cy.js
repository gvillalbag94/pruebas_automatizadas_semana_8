const user = require('../../../fixtures/user_ghost')

context('Inicio de sesión exitoso por email y contraseña correctos.', () => {
  beforeEach(() => {
    cy.visit('http://52.42.171.94:3001/ghost/');
  })

  it('Inicio de sesión exitoso con correo y password correcto', () => {
     // Seleccionar el campo del correo e ingresar un valor.
     cy.get('input[name="identification"]').type(user.email);
     cy.screenshot('../login_success/after_0');
     cy.wait(500);
    
     // Seleccionar el campo del password e ingresar un valor.
     cy.get('input[name="password"]').type(user.password);
     cy.screenshot('../login_success/after_1');
     cy.wait(500);
 
      // Seleccioanr el boton de inicio de sesion.
      cy.get('button[type="submit"]').click();
      cy.screenshot('../login_success/after_2');
      cy.wait(500);
 
     // La URL contiene la ruta de dashboard.
     cy.url().should('contain','/site');
     cy.screenshot('../login_success/after_3');
     cy.wait(500);
  })
})
