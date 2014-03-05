'use strict';

describe('Directive: siteHeader', function () {

  // load the directive's module
  beforeEach(module('parseAngularTodoodlyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<site-header></site-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the siteHeader directive');
  }));
});
