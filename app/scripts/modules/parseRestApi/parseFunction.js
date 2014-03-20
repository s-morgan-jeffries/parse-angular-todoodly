'use strict';

angular.module('parseRestApi')
  .factory('parseFunction', function ($resource, parseConfig) {
    var parseFunctionResource,
      url = url = parseConfig.restApiBaseUrl + '/functions/:functionName',
      defaults = {functionName: '@functionName'},
      customMethods = {
        cloudCall: {
          method:'POST'
        }
      };

    parseFunctionResource = $resource(url, defaults, customMethods);

    parseFunctionResource.prototype = {};

    return function parseFunction(functionName, args) {
      args = args || {};
      args.functionName = functionName;
      return parseFunctionResource.cloudCall(args);
    };
  });