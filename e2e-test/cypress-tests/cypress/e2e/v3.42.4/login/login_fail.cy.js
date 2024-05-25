const user = require('../../../fixtures/user_ghost')
const errors = require('../../../fixtures/login_errors')


context('Error en inicio de sesion por email y contraseña incorrecta.', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://52.42.171.94:3001/ghost/');
  })

  // https://on.cypress.io/interacting-with-elements

  it('Iniciar sesión fallido con campos vacios de email y password', () => {
    // Seleccioanr el boton de inicio de sesion.
    cy.get('button[type="submit"]').click();
    cy.screenshot('../login_fail/after_0');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]').should('contain','Retry');
    cy.screenshot('../login_fail/after_1');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
    cy.screenshot('../login_fail/after_2');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con campo password vacio', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[name="identification"]').type(user.email);
    cy.screenshot('../login_fail/after_3');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/after_4');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]').should('contain','Retry');
    cy.screenshot('../login_fail/after_5');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
    cy.screenshot('../login_fail/after_6');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con campo email vacio', () => {
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[name="password"]').type(user.password);
    cy.screenshot('../login_fail/after_7');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/after_8');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]').should('contain','Retry');
    cy.screenshot('../login_fail/after_9');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
    cy.screenshot('../login_fail/after_10');
    cy.wait(500);

  })

  it('Iniciar sesión fallido con email invalido y password incorrecto', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[name="identification"]').type(user.invalid_email);
    cy.screenshot('../login_fail/after_11');
    cy.wait(500);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[name="password"]').type(user.invalid_password);
    cy.screenshot('../login_fail/after_12');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/after_13');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]').should('contain','Retry');
    cy.screenshot('../login_fail/after_14');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.invalid_email);
    cy.screenshot('../login_fail/after_15');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con email correcto no registrado', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[name="identification"]').type(user.wrong_email);
    cy.screenshot('../login_fail/after_16');
    cy.wait(500);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[name="password"]').type(user.invalid_password);
    cy.screenshot('../login_fail/after_17');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/after_18');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]').should('contain','Retry');
    cy.screenshot('../login_fail/after_19');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain', errors.incorrect_email);
    cy.screenshot('../login_fail/after_20');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con email correcto y password incorrecto', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[name="identification"]').type(user.email);
    cy.screenshot('../login_fail/after_21');
    cy.wait(500);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[name="password"]').type(user.invalid_password);
    cy.screenshot('../login_fail/after_22');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/after_23');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon gh-btn-red ember-view"]').should('contain','Retry');
    cy.screenshot('../login_fail/after_24');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain', errors.incorrect_password);
    cy.screenshot('../login_fail/after_25');
    cy.wait(500);
  })
 
})
