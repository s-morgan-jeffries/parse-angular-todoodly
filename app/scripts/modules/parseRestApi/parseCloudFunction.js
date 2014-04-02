'use strict';

angular.module('parseRestApi')
  .factory('parseCloudFunction', function ($resource, parseConfig) {
    var parseCloudResource,
      url = url = parseConfig.restApiBaseUrl + '/functions/:functionName',
      defaults = {functionName: '@functionName'},
      customMethods = {
        cloudCall: {
          method:'POST'
        }
      };

    parseCloudResource = $resource(url, defaults, customMethods);

    parseCloudResource.prototype = {};

    return function parseCloudFunction(functionName, args) {
      args = args || {};
      args.functionName = functionName;
      return parseCloudResource.cloudCall(args);
    };
  });