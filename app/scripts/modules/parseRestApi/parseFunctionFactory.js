'use strict';

var pf;

angular.module('parseRestApi')
  .factory('parseFunctionFactory', function ($q, $resource, parseApiBaseUrl) {

    return function parseFunctionFactory(functionName, defaultArgs) {
      var parseFunction,
        url = url = parseApiBaseUrl + '/functions/' + functionName,
        defaults = {},
        customMethods = {
          cloudCall: {
            method:'POST'
          }
        };

      parseFunction = $resource(url, defaults, customMethods);

      parseFunction.prototype = {};

      return function(args) {
        args = args || {};
        angular.forEach(defaultArgs, function(val, key) {
          args[key] = args[key] || val;
        });
        return parseFunction.cloudCall(args);
      };
    };
  });
