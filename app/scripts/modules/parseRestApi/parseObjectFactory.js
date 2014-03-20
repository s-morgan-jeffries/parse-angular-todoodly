'use strict';

angular.module('parseRestApi')
  .factory('parseObjectFactory', function (parseAbstractObjectFactory, parseConfig) {

    return function parseObjectFactory(className, defaults, customMethods) {
      var ParseObject,
        url = parseConfig.restApiBaseUrl + '/classes/' + className + '/:objectId';

      customMethods = customMethods || {};
      defaults = _.extend((defaults || {}), {objectId: '@objectId'});

      ParseObject = parseAbstractObjectFactory(className, url, defaults, customMethods);

      return ParseObject;

    };

  });