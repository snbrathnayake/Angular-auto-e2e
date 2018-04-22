// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// protractor protractor.conf.js

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  params: {
    glob: 'test',
    HAS_GATEWAY_VIEW: false,
    INDEX_ELEMENT:0,
    READY:null,
    PENDING:null,
    OFFLINE:null,
    SCAN:null,
    DSE:null
  },
  specs: [
    './e2e/landingpage/**/*.e2e-spec.ts',
    // './e2e/validation/**/*.e2e-spec.ts',
    // './e2e/creation/**/*.e2e-spec.ts',
    './e2e/endpoint-status/**/*.e2e-spec.ts',
  ],

  suites: {
    default: './e2e/*.e2e-spec.ts',
    home: './e2e/homepage/**/*.e2e-spec.ts',
    about: './e2e/aboutpage/**/*.e2e-spec.ts',
    land: './e2e/landingpage/**/*.e2e-spec.ts',
    gateway: './e2e/gatwaypage/**/*.e2e-spec.ts',
  },

 
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--window-size=1200,800'] // THIS!
    }
  },

  directConnect: true,
  baseUrl: 'http://localhost:4200/#',
  framework: 'jasmine',
  jasmineNodeOpts: {
    realtimeFailure: true,
    showColors: true,
    defaultTimeoutInterval: 1440000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};