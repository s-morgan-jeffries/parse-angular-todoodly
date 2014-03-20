'use strict';

angular.module('parseRestApi')
  .factory('parseConfig', function () {
    return {
      restApiBaseUrl: 'https://api.parse.com/1'
    };
  });