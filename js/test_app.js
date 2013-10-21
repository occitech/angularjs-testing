angular.module('testApp', [])
  .controller('FooController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.model = {};

    $scope.save = function(model) {
      $http.post('/api/foo.json', model).success(function() {
        $location.url('/redirect/to/url');
      });
    };
  }])
;
