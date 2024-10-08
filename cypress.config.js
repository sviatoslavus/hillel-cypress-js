const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    env: {
      BASE_URL: "https://www.saucedemo.com/",
      USER_NAME: "standard_user",
      USER_PASSWORD: "secret_sauce"
    },
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    //baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});