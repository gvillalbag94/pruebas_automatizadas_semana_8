const user = require('../../../fixtures/user_ghost')
const errors = require('../../../fixtures/login_errors')


context('Error en inicio de sesion por email y contraseña incorrecta.', () => {
  beforeEach(() => {
    // Ingresar a la plataforma Ghost
    cy.visit('http://54.188.89.84/ghost/');
  })

  // https://on.cypress.io/interacting-with-elements

  it('Iniciar sesión fallido con campos vacios de email y password', () => {
    // Seleccioanr el boton de inicio de sesion.
    cy.get('button[type="submit"]').click();
    cy.screenshot('../login_fail/before_0');
    cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    cy.screenshot('../login_fail/before_1');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
    cy.screenshot('../login_fail/before_2');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con campo password vacio', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('../login_fail/before_3');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/before_4');
     cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    cy.screenshot('../login_fail/before_5');
    cy.wait(500);
    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
    cy.screenshot('../login_fail/before_6');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con campo email vacio', () => {
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.password);
    cy.screenshot('../login_fail/before_7');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/before_8');
     cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    cy.screenshot('../login_fail/before_9');
    cy.wait(500);
    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.empty_form);
    cy.screenshot('../login_fail/before_10');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con email invalido y password incorrecto', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.invalid_email);
    cy.screenshot('../login_fail/before_11');
    cy.wait(500);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.invalid_password);
    cy.screenshot('../login_fail/before_12');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/before_13');
     cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    cy.screenshot('../login_fail/before_14');
    cy.wait(500);
    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain',errors.invalid_email);
    cy.screenshot('../login_fail/before_15');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con email correcto no registrado', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.wrong_email);
    cy.screenshot('../login_fail/before_16');
    cy.wait(500);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.invalid_password);
    cy.screenshot('../login_fail/before_17');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/before_18');
     cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    cy.screenshot('../login_fail/before_19');
    cy.wait(500);
    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain', errors.incorrect_email);
    cy.screenshot('../login_fail/before_20');
    cy.wait(500);
  })

  it('Iniciar sesión fallido con email correcto y password incorrecto', () => {
    // Seleccionar el campo del correo e ingresar un valor.
    cy.get('input[id="identification"]').type(user.email);
    cy.screenshot('../login_fail/before_21');
    cy.wait(500);
    
    // Seleccionar el campo del password e ingresar un valor.
    cy.get('input[id="password"]').type(user.invalid_password);
    cy.screenshot('../login_fail/before_22');
    cy.wait(500);

     // Seleccioanr el boton de inicio de sesion.
     cy.get('button[type="submit"]').click();
     cy.screenshot('../login_fail/before_23');
     cy.wait(500);

    // El boton debe contener el mensaje "Retry"
    cy.get('span[data-test-task-button-state="failure"]').should('contain','Retry');
    cy.screenshot('../login_fail/before_24');
    cy.wait(500);

    // Visualizo mensaje de error.
    cy.get('p[class="main-error"]').should('contain', errors.incorrect_password);
    cy.screenshot('../login_fail/before_25');
    cy.wait(500);
  })
 
})
