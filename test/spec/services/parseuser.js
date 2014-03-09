'use strict';

describe('Service: parseUser', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseUser;
  beforeEach(inject(function (_parseUser_) {
    parseUser = _parseUser_;
  }));

  it('should do something', function () {
    expect(!!parseUser).toBe(true);
  });

});
