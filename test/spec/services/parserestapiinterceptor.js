'use strict';

describe('Service: parseRestApiInterceptor', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseRestApiInterceptor;
  beforeEach(inject(function (_parseRestApiInterceptor_) {
    parseRestApiInterceptor = _parseRestApiInterceptor_;
  }));

  it('should do something', function () {
    expect(!!parseRestApiInterceptor).toBe(true);
  });

});
