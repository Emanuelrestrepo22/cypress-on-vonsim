describe('Simulador VonSim - Pruebas del editor', () => {
  const editorSelector = 'div[contenteditable="true"].cm-content'; // Selector del editor

  it('Limpia el editor de código', () => {
    // Visitar el simulador
    cy.visit('/');

    // Limpiar el editor línea por línea
    cy.get(editorSelector)
      .children() // Obtener todas las líneas del editor
      .each((line) => {
        // Usar JavaScript para vaciar el contenido de cada línea
        cy.wrap(line).then(($line) => {
          $line.html(''); // Vaciar el contenido del elemento hijo
        });
      });

    // Validar que el editor completo esté vacío
    cy.get(editorSelector)
      .invoke('text') // Obtener el texto combinado de todas las líneas
      .should('eq', ''); // Validar que no quede nada
  });

 
});
