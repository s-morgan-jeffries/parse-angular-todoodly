'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('Test', function ($resource, parseConfig) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var url = parseConfig.baseUrl + '/classes/Test/:testId';
    var Test = $resource(url);

    // Public API here
    return Test;
  });
