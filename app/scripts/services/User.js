'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('User', function ($http, parseConfig) {

    var baseUrl = parseConfig.baseUrl + '/users';

    var assignedByParse = ['createdAt', 'updatedAt', 'objectId'];

    var that = {};

    that.get = function(id) {
      var config = {};

      config.method = 'GET';
      config.url = baseUrl + '/' + id;
      return $http(config);
    };
    that.save = function(user) {
      var config = {};

      config.method = user.objectId ? 'PUT' : 'POST';
      config.url = user.objectId ? baseUrl + '/' + user.objectId : baseUrl;
      config.data = JSON.stringify(_.omit(user, assignedByParse));
      return $http(config);
    };
    that.query = function() {
      var config = {};

      config.method = 'GET';
      config.url = baseUrl;
      return $http(config);
    };
    that.delete = function(id) {
      var config = {};

      config.method = 'DELETE';
      config.url = baseUrl + '/' + id;
      return $http(config);
    };

    return that;
  });