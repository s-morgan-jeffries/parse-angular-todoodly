'use strict';

var def1,
  def2;

angular.module('parseRestApi')
  .factory('parseObjectFactory', function (parseAbstractObjectFactory, parseConfig, parseFunctionUtils) {

    var _ = parseFunctionUtils;

    return function parseObjectFactory(className, defaults, customMethods) {
      var ParseObject,
        url = parseConfig.restApiBaseUrl + '/classes/' + className + '/:objectId';

      customMethods = customMethods || {};
      defaults = _.extend((defaults || {}), {objectId: '@objectId'});
//      def1 = defaults;
//      def2 = parseFunctionUtils.extend((defaults || {}), {objectId: '@objectId'});

      ParseObject = parseAbstractObjectFactory(className, url, defaults, customMethods);

      return ParseObject;

    };

  });