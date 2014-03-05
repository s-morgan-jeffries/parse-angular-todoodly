'use strict';

describe('Service: parseSessionInterceptor', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseSessionInterceptor;
  beforeEach(inject(function (_parseSessionInterceptor_) {
    parseSessionInterceptor = _parseSessionInterceptor_;
  }));

  it('should do something', function () {
    expect(!!parseSessionInterceptor).toBe(true);
  });

});
