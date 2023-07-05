const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_url: 'https://opensource-demo.orangehrmlive.com/',
    qademo: 'https://shop.demoqa.com/'
  },
  pageLoadTimeout: 100000,
  e2e: {
    // watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
