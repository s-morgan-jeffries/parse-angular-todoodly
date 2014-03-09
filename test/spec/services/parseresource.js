'use strict';

describe('Service: parseResource', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseResource;
  beforeEach(inject(function (_parseResource_) {
    parseResource = _parseResource_;
  }));

  it('should do something', function () {
    expect(!!parseResource).toBe(true);
  });

});
