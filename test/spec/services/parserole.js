'use strict';

describe('Service: parseRole', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseRole;
  beforeEach(inject(function (_parseRole_) {
    parseRole = _parseRole_;
  }));

  it('should do something', function () {
    expect(!!parseRole).toBe(true);
  });

});
