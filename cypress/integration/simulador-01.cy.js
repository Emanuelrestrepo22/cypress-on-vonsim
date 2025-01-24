describe('Simulador VonSim - Archivo 01', () => {
  it('Carga y ejecuta challenge-qa-01.asm', () => {
    // Visitar el simulador
    cy.visit('/');

    // Precondiciones: Limpiar el input
    cy.get('#codigo-panel').click().clear();

    // Cargar código desde fixtures
    cy.fixture('challenge-qa-01.asm').then((codigo) => {
      cy.get('#codigo-panel').type(codigo); // Escribir el código
    });

    // Hacer click en botón inicio
    cy.get('#boton-inicio').click();

    // Abrir menú acordeón y ejecutar hasta el final
    cy.get('#menu-acordeon').contains('Hasta el final').click();

    // Validar salida en pantalla
    cy.get('#pantalla').should('contain.text', 'AB'); // Ajustar según el caso
  });
});
