module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'js/test_app.js',
      'test/unit/**/*.js'
    ],
    frameworks: ['jasmine'],
    autoWatch: true,
    browsers: ['PhantomJS']
  });
};
