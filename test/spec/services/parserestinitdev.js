'use strict';

describe('Service: parseRestInitDev', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseRestInitDev;
  beforeEach(inject(function (_parseRestInitDev_) {
    parseRestInitDev = _parseRestInitDev_;
  }));

  it('should do something', function () {
    expect(!!parseRestInitDev).toBe(true);
  });

});
