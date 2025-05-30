const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    experimentalSessionAndOrigin: true,
    retries: 2,
    env: {
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    },
    setupNodeEvents(on, config) {
      config.specPattern ="cypress/e2e/*.cy.{js,jsx,ts,tsx}";
        return config;
      },
       supportFile: 'cypress/support/e2e.js'
  },
});

