// Karma configuration
// Generated on Wed Dec 03 2014 14:29:32 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "public_html/bower_components/jquery/dist/jquery.js",
        "public_html/bower_components/jquery-knob/js/jquery.knob.js",
        "public_html/bower_components/bootstrap/dist/js/bootstrap.js",
        "public_html/bower_components/angular/angular.js",
        "public_html/bower_components/angular-resource/angular-resource.js",
        "public_html/bower_components/angular-route/angular-route.js",
        "public_html/bower_components/angular-mocks/angular-mocks.js",
        "public_html/scripts/app.js",
        "public_html/scripts/controllers/_module.js",
        "public_html/scripts/filters/_module.js",
        "public_html/scripts/directives/_module.js",
        "public_html/scripts/services/_module.js",
        "public_html/scripts/controllers/todoCtrl.js",
        "public_html/scripts/controllers/todoItemCtrl.js",
        "public_html/scripts/services/ToDoResource.js" ,
        "public_html/scripts/filters/shortenerFilter.js",
        "public_html/scripts/directives/knob.js",
        "public_html/scripts/directives/bsPanel.js",
        "public_html/scripts/directives/bsPanelContent.js",
        "public_html/scripts/directives/bsPanelHeader.js",
        "public_html/scripts/directives/todoListItem.js",
        "public_html/scripts/directives/dateStringModel.js",
        "public_html/scripts/directives/bs-combobox.js",
        "public_html/templates/*.html",
        "test/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'public_html/templates/*.html': ['ng-html2js']
    },
    
    ngHtml2JsPreprocessor: {
        stripPrefix: 'public_html/',
        moduleName: 'my.templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
