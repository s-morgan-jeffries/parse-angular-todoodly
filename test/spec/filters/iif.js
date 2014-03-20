'use strict';

describe('Filter: iif', function () {

  // load the filter's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // initialize a new instance of the filter before each test
  var iif;
  beforeEach(inject(function ($filter) {
    iif = $filter('iif');
  }));

  it('should return the input prefixed with "iif filter:"', function () {
    var text = 'angularjs';
    expect(iif(text)).toBe('iif filter: ' + text);
  });

});
