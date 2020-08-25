// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [
    {'browserName': 'internet explorer'},
    {'browserName': 'chrome'}
 ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  suites:{
    login: './e2e/login/**/*.e2e-spec.ts'
  },
  onPrepare() {  
    browser.driver.manage().window().maximize(),
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new HtmlReporter({
      docTitle: 'Requisite-Variety',
      baseDirectory: 'tmp/screenshots',
      screenshotsSubfolder: 'images',
      excludeSkippedSpecs: true,
      takeScreenShotsOnlyForFailedSpecs: true,
      preserveDirectory: false
   }).getJasmine2Reporter());
  }
};