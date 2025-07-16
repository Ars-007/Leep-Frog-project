const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tko9pi',
  e2e: {
    baseUrl: 'https://leepfrog.com',
    viewportWidth: 1400,
    viewportHeight: 1200,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
    },
  },
});