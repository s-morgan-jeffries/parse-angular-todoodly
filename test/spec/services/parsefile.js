'use strict';

describe('Service: parseFile', function () {

  // load the service's module
  beforeEach(module('parseAngularTodoodlyApp'));

  // instantiate service
  var parseFile;
  beforeEach(inject(function (_parseFile_) {
    parseFile = _parseFile_;
  }));

  it('should do something', function () {
    expect(!!parseFile).toBe(true);
  });

});
