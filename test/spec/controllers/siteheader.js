'use strict';

describe('Controller: SiteheaderCtrl', function () {

  // load the controller's module
  beforeEach(module('parseAngularTodoodlyApp'));

  var SiteheaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiteheaderCtrl = $controller('SiteheaderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
