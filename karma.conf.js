module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: ['lib/angular.min.js', 'lib/angular-mocks.js', '*.js', '*.html'],

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
