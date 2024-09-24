const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on, config) {

  on('file:preprocessor', cucumber());
    return config;
  // implement node event listeners here
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern:"cypress/support/steps/*.js"
    
    // specPattern:"cypress/UAT/featurer"

    specPattern:"cypress/UAT/featurer/*.feature"
    
    // "cypress/integration/**/*.js"


    // "cypress/integration/Assignment/*.js"

    // "cypress/integration/Basic/*.js"

    // specPattern:"cypress/integration/Basic/rsdemo.js"

  },
});
