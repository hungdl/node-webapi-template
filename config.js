/// <reference path="typings/index.d.ts" />

var path = require('path');

var config = {
   // Base Directories
   libDir         : __dirname,
   nodeModulesDir : path.join(__dirname, 'node_modules')
};

var mochaOpts = {
  reporter: 'mochawesome',
  timeout: 30000,
  slow: 1,
  recursive: true,
  'no-exit': true,
  reporterOptions: {
    reportName: 'PA-TOOL',
    reportTitle: 'PA tool unit tests',
    inlineAssets: true,
    autoOpen: false
  }
};

module.exports = function (options) {

  config.mochaOpts = mochaOpts  

  config.srcDir = path.join(__dirname, 'src');
  config.testDir         = path.join(__dirname, 'tests');
  config.testFiles = path.join(config.testDir, '/**/*.ts');

  config.srcFiles     = path.join(config.srcDir, '/**/*.ts');

  // Build Directories
  config.buildDir = path.join(__dirname, 'dist');
  config.testReportDir = path.join(config.buildDir, '/tests.report');
  config.buildFontsDir  = path.join(config.buildDir, 'fonts');
  config.buildCssDir    = path.join(config.buildDir, 'css');
  config.buildJsDir     = path.join(config.buildDir, 'js');
 
  config.mochaOpts.reporterOptions.reportDir = config.testReportDir;
  return config;
};