// Comando personalizado para limpiar un editor de código
Cypress.Commands.add('limpiarEditor', (selector) => {
    // Seleccionar el contenedor padre
    cy.get(selector)
      .children() // Obtener todos los hijos (líneas de código)
      .each((line) => {
        // Usar JavaScript para limpiar completamente el contenido del hijo
        cy.wrap(line).then(($line) => {
          $line.html(''); // Vaciar el contenido del elemento hijo
        });
      });
  
    // Verificar que el editor esté vacío (opcional)
    cy.get(selector)
      .invoke('text') // Obtener el texto combinado de todas las líneas
      .should('eq', ''); // Validar que no quede nada
  });
  