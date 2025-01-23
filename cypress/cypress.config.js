describe('Prueba de automatización de VonSim - challenge-qa-01', () => {
  it('Cargar y ejecutar challenge-qa-01.asm', () => {
    cy.visit('/'); // Abre el simulador


    //pre-conditions
    cy.get('.cm-editor .ring-offset-store #radix-\\:r0 .cm-content').click();
    cy.get('.cm-editor .ring-offset-store #radix-\\:r0 .cm-content').type('{ctrl}a'); // En Mac usa '{meta}a'
    cy.get('.cm-editor .ring-offset-store #radix-\\:r0 .cm-content').type('{backspace}');


    // Cargar el archivo .asm
    cy.fixture('challenge-qa-01.asm').then((codigo) => {
      cy.get('.cm-editor .ring-offset-store #radix-\\:r0 .cm-content').type(codigo);
    });

    // Simular entrada del teclado
    cy.get('#teclado').find('.tecla').contains('A').click();
    cy.get('#teclado').find('.tecla').contains('B').click();
    cy.get('#teclado').find('.tecla').contains('INTRO').click();

    // Verificar la salida
    cy.wait(1000);
    cy.get('#pantalla').should('contain.text', 'AB');
  });
});
