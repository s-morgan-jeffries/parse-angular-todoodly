'use strict';

describe('Service: userExists', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var userExists;
  beforeEach(inject(function (_userExists_) {
    userExists = _userExists_;
  }));

  it('should do something', function () {
    expect(!!userExists).toBe(true);
  });

});
