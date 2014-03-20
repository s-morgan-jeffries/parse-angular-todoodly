'use strict';

describe('Directive: ngFocus', function () {

  // load the directive's module
  beforeEach(module('parseAngularTodoodlyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-focus></ng-focus>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngFocus directive');
  }));
});
