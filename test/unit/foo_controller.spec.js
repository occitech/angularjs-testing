describe('FooController', function() {
  var $scope, controller;

  beforeEach(module('testApp'));
  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $location = jasmine.createSpyObj('$location', ['url']);

    controller = $controller('FooController', {
      $scope: $scope,
      $location: $location
    });
  }));

  it('should set save function', function() {
    expect($scope.save).toBeDefined();
  });

  it('should call /api/foo.json on $scope.save()', inject(function($httpBackend) {
    $scope.save();

    $httpBackend.expectPOST('/api/foo.json').respond();
    $httpBackend.flush();
  }));

  it('should redirect to /redirect/to/url', inject(function($httpBackend) {
    $scope.save();
    $httpBackend.whenPOST('/api/foo.json').respond(200);
    $httpBackend.flush();

    expect($location.url).toHaveBeenCalledWith('/redirect/to/url');
  }));
});
