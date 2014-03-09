'use strict';

angular.module('parseRestApi')
  .factory('ParseUser', function (parseAbstractObjectFactory, parseApiBaseUrl) {
      var url = parseApiBaseUrl + '/users/:objectId',
        defaults = {objectId: '@objectId'},
        ParseUser = parseAbstractObjectFactory('_User', url, defaults);

      ParseUser.name = 'User';

      return ParseUser;
  });