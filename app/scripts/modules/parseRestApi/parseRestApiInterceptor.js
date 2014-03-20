'use strict';

angular.module('parseRestApi')
  .factory('parseRestApiInterceptor', function ($q, parseSession, parseConfig) {

    var parseRestApiHeaders = function() {
      var headers = {
        'X-Parse-Application-Id': parseConfig.applicationId,
        'X-Parse-REST-API-Key': parseConfig.restKey
      };
      if (parseSession.isAuthenticated) {
        headers['X-Parse-Session-Token'] = parseSession.sessionToken;
      }
      return headers;
    };

    var parseApiBaseUrlRegExp = RegExp(parseConfig.restApiBaseUrl);

    var isParseRequest = function(url) {
      return parseApiBaseUrlRegExp.test(url);
    };

    return {
      request: function(config) {
        if (isParseRequest(config.url)) {
          config.headers = config.headers || {};
          angular.extend(config.headers, parseRestApiHeaders());
        }
        return config || $q.when(config);
      }
    };
  });