'use strict';

describe('Service: parseApiBaseUrl', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseApiBaseUrl;
  beforeEach(inject(function (_parseApiBaseUrl_) {
    parseApiBaseUrl = _parseApiBaseUrl_;
  }));

  it('should do something', function () {
    expect(!!parseApiBaseUrl).toBe(true);
  });

});
