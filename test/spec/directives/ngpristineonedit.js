'use strict';

describe('Directive: ngPristineOnEdit', function () {

  // load the directive's module
  beforeEach(module('parseAngularTodoodlyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-pristine-on-edit></ng-pristine-on-edit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngPristineOnEdit directive');
  }));
});
