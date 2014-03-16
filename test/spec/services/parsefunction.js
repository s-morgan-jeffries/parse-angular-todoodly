'use strict';

describe('Service: parseFunction', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseFunction;
  beforeEach(inject(function (_parseFunction_) {
    parseFunction = _parseFunction_;
  }));

  it('should do something', function () {
    expect(!!parseFunction).toBe(true);
  });

});
