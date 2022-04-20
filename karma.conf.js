module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '*.js',
      '*.html',
    ],

    preprocessors: {
      '*.html': ['ng-html2js'],
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates',
    },

    // for your preference
    browsers: ['Chrome'],
    // browsers: ['Firefox'],
  });
};
