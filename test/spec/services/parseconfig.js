'use strict';

describe('Service: parseConfig', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseConfig;
  beforeEach(inject(function (_parseConfig_) {
    parseConfig = _parseConfig_;
  }));

  it('should do something', function () {
    expect(!!parseConfig).toBe(true);
  });

});
