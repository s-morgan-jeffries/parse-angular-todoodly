'use strict';

describe('Service: parseFunctionUtils', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseFunctionUtils;
  beforeEach(inject(function (_parseFunctionUtils_) {
    parseFunctionUtils = _parseFunctionUtils_;
  }));

  it('should do something', function () {
    expect(!!parseFunctionUtils).toBe(true);
  });

});
