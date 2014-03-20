'use strict';

angular.module('parseRestApi')
  .factory('parseFunction', function ($resource, parseConfig) {
    var parseFunction,
      url = url = parseConfig.restApiBaseUrl + '/functions/:functionName',
      defaults = {functionName: '@functionName'},
      customMethods = {
        cloudCall: {
          method:'POST'
        }
      };

    parseFunction = $resource(url, defaults, customMethods);

    parseFunction.prototype = {};

    return function(functionName, args) {
      args = args || {};
      args.functionName = functionName;
      return parseFunction.cloudCall(args);
    };
  });