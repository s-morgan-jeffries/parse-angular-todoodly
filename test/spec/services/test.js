'use strict';

describe('Service: Test', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var Test;
  beforeEach(inject(function (_Test_) {
    Test = _Test_;
  }));

  it('should do something', function () {
    expect(!!Test).toBe(true);
  });

});
