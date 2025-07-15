const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: 'tko9pi',
  e2e: {
    baseUrl: 'https://leepfrog.com',
    viewportWidth: 1400,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});