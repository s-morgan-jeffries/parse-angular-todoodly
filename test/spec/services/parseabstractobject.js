'use strict';

describe('Service: parseAbstractObject', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseAbstractObject;
  beforeEach(inject(function (_parseAbstractObject_) {
    parseAbstractObject = _parseAbstractObject_;
  }));

  it('should do something', function () {
    expect(!!parseAbstractObject).toBe(true);
  });

});
