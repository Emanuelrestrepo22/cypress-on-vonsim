const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://vonsim.github.io", // URL base del simulador
    specPattern: "cypress/integration/**/*.cy.js", // Patrón de los archivos de prueba
    supportFile: false,
  },
});
