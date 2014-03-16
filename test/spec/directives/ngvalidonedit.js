'use strict';

describe('Directive: ngValidOnEdit', function () {

  // load the directive's module
  beforeEach(module('parseAngularTodoodlyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-valid-on-edit></ng-valid-on-edit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngValidOnEdit directive');
  }));
});
