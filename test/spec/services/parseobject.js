'use strict';

describe('Service: parseObject', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseObject;
  beforeEach(inject(function (_parseObject_) {
    parseObject = _parseObject_;
  }));

  it('should do something', function () {
    expect(!!parseObject).toBe(true);
  });

});
