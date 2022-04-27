# Description
A minimum implementation of Lecture46 in Karma.

# Source
## Lecture
[Lecture 46, Part 1: Testing AngularJS Directives](https://www.coursera.org/learn/single-page-web-apps-with-angularjs/lecture/gPEYm/lecture-46-part-1-testing-angularjs-directives)  
[Lecture 46, Part 2: Testing AngularJS Directives](https://www.coursera.org/learn/single-page-web-apps-with-angularjs/lecture/50zV5/lecture-46-part-2-testing-angularjs-directives)
## Code
[Lecture46](https://github.com/jhu-ep-coursera/fullstack-course5/tree/master/examples/Lecture46)

# Test out-of-the-box
## Terminal / CMD
` cd desktop `  
` git clone https://github.com/leungsekyu/Lecture46.git `  
` cd Lecture46 `  

` ./node_modules/karma/bin/karma start `

# Detail steps
## 1. Enter the local project
> Please download the original Lecture46 sample code first
> 
` cd Lecture46 `
## 2. Install Karma dependencies
` npm install karma --save-dev `  
### Testing framework // Jasmine
` npm install karma-jasmine jasmine-core --save-dev `  
### Browser launchers // Chrome or Firefox, for your preference
` npm install karma-chrome-launcher --save-dev `  
` npm install karma-firefox-launcher --save-dev `  
### Templates preprocessor // [ng-html2js](https://github.com/karma-runner/karma-ng-html2js-preprocessor)
` npm install karma-ng-html2js-preprocessor --save-dev `
## 3. Initialize ` karma.conf.js `
` karma init `
### Then replace the whole default content with the following code snippet
```
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
```
## 5. Modified ` shoppinglist.directive.spec.js `
### Add ` beforeEach(module('templates')); `
```
beforeEach(module('ShoppingListDirectiveApp'));
beforeEach(module('templates'));
```
### Comment out
```
beforeEach(inject(function ($templateCache) {
  var directiveTemplate = null;
  var req = new XMLHttpRequest();
  req.onload = function () {
    directiveTemplate = this.responseText;
  };

  // Note that the relative path may be different from your unit test HTML file.
  // Using `false` as the third parameter to open() makes the operation synchronous.
  req.open('get', 'shoppingList.html', false);
  req.send();
  $templateCache.put('shoppingList.html', directiveTemplate);
}));
```
## 6. Run test
` ./node_modules/karma/bin/karma start `
### And it shall output like this
<img src="https://cdn.jsdelivr.net/gh/leungsekyu/Image-Hosting/Lecture46_success.png" width="600" alt="success"/>

# Reference / Acknowledgement
## Tutorial
[Unit testing AngularJS applications](https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications)

## Issues
### karma
> karma should NOT be installed globally, it will not work! Install ` karma-cli ` if you want a global cmd and install karma + plugins locally

[Karma cant find the npm modules #1488](https://github.com/karma-runner/karma/issues/1488)  
[Karma Installation](http://karma-runner.github.io/0.12/intro/installation.html)
### karma.conf.js
> By default Karma will load plugins from all installed NPM packages matching ‘karma-*’, but you have changed it by asking to only load plugins from the single package, hence the error. Either remove plugins key completely or list all plugins you need.

[Server start failed, No provider for "framework:jasmine" #3506](https://github.com/karma-runner/karma/issues/3506)
### karma-ng-html2js-preprocessor
> It needs to be installed locally

[missing plugin error #66](https://github.com/karma-runner/karma-ng-html2js-preprocessor/issues/66)