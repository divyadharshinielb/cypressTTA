 //cypress.config.js
 declare var require: any
 declare var module: any

 import { defineConfig } from "cypress";


 module.exports = defineConfig({
  projectId: 'pbi8tx',

 //  reporter: 'cypress-mochawesome-reporter',
  // "pageLoadTimeout": 60000,

//   reporterOptions: {

//     charts: true,
    
//     reportPageTitle: 'Blue Lightning ',
    
//     embeddedScreenshots: true,
    
//     inlineAssets: true, //Adds the asserts inline
    
//     },

//   e2e: {

//     setupNodeEvents(on, config) {

//       require('cypress-mochawesome-reporter/plugin')(on);

//     },

//   },

// });

//export default : {
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
       
      
           },
  // supportFile: './../myinfra/cypress/support/e2e.ts',
  // downloadsFolder: './../myinfra/cypress/downloads',
  chromeWebSecurity: false,
  experimentalSourceRewriting: false,
  //experimentalSessionAndOrigin: true,
  experimentalModifyObstructiveThirdPartyCode: true,
  numTestsKeptInMemory: 1,
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 60000,
  // screenshotsFolder: './../myinfra/mochawesome-report/assets',
  screenshotOnRunFailure: true,
  //reporter: './../cypress project/node_modules/mochawesome',
 /*reporterOptions: {
    reportDir: './../TTA/report',
    code: true,
    charts: true,
    reportPageTitle: 'TTA',
    overwrite: false,
    html: true,
    json: false,
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },*/
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  waitForAnimations: true
},
  defaultCommandTimeout :60000,
  chromeWebSecurity: false,
  "video": false
}
 );