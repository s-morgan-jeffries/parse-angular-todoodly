'use strict';

angular.module('parseRestApi')
  .factory('parseRestApiInterceptor', function ($q, parseConfig) {
    var parseRestApiHeaders = {
      'X-Parse-Application-Id': parseConfig.applicationId,
      'X-Parse-REST-API-Key': parseConfig.restKey
    };

    return {
      request: function(config) {
        config.headers = config.headers || {};
        angular.extend(config.headers, parseRestApiHeaders);
        return config || $q.when(config);
      }
    };
  });