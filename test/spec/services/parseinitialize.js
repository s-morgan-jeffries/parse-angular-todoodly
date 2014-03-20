'use strict';

describe('Service: parseInitialize', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseInitialize;
  beforeEach(inject(function (_parseInitialize_) {
    parseInitialize = _parseInitialize_;
  }));

  it('should do something', function () {
    expect(!!parseInitialize).toBe(true);
  });

});
