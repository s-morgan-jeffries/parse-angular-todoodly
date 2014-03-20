'use strict';

angular.module('parseRestApi')
  .factory('parseInitialize', function (parseConfig) {
    var parseApplicationId,
      parseRestKey;

    var parseInitialize = function(applicationId, restKey) {
      parseApplicationId = applicationId;
      parseRestKey = restKey;
      parseInitialize = function() {
        console.warn('Parse application already initialized (application ID: ' + parseApplicationId + ', REST key: ' + parseRestKey + ')!');
      };
    };

    Object.defineProperty(parseConfig, 'applicationId', {
      get: function() {return parseApplicationId;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseConfig, 'restKey', {
      get: function() {return parseRestKey;},
      enumerable: true,
      configurable: false
    });

    return function(applicationId, restKey) {
      parseInitialize(applicationId, restKey);
    };
  });
