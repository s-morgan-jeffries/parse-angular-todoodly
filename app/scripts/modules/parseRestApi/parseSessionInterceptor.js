'use strict';

angular.module('parseRestApi')
  .factory('parseSessionInterceptor', function ($q, parseSession) {
    var parseSessionHeaders = function() {
      return {
        'X-Parse-Session-Token': parseSession.sessionToken
      };
    };

    return {
      request: function(config) {
        config.headers = config.headers || {};
        if (parseSession.isAuthenticated) {
          angular.extend(config.headers, parseSessionHeaders());
        }
        return config || $q.when(config);
      }
    };
  });