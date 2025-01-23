const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://vonsim.github.io", // URL base del simulador
    fixturesFolder: "cypress/fixtures",
    integrationFolder: "cypress/integration",
  },
});
