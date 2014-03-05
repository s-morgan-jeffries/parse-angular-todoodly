'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('parseSessionInterceptor', function ($q, parseConfig, session) {
    var parseSessionHeaders = function() {
      return {
        'X-Parse-Session-Token': session.sessionToken
      };
    };

    return {
      request: function(config) {
        config.headers = config.headers || {};
        if (session.isAuthenticated) {
          angular.extend(config.headers, parseSessionHeaders());
        }
        return config || $q.when(config);
      }
    };
  });

angular.module('parseAngularTodoodlyApp')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('parseSessionInterceptor');
  });