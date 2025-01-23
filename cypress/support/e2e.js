// Archivo para inicializar configuraciones específicas de Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores no manejados para que las pruebas no se detengan
    return false;
  });
  
// Import commands.js using ES2015 syntax:
import './commands'