'use strict';

describe('Service: helloCloud', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var helloCloud;
  beforeEach(inject(function (_helloCloud_) {
    helloCloud = _helloCloud_;
  }));

  it('should do something', function () {
    expect(!!helloCloud).toBe(true);
  });

});
