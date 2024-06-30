// cypress/plugins/index.js

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    on('task', {
      log(message) {
        console.log(message);
        return null;
      },
    });
  
    return config;
  }