'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('User', function(ParseUser) {
    return ParseUser;
  });

//angular.module('parseRestApi')
//  .factory('User', function ($http, parseApiBaseUrl, parseSession) {
//
//    var baseUrl = parseApiBaseUrl + '/users';
//
//    var assignedByParse = ['createdAt', 'updatedAt', 'objectId'];
//
//    var that = {};
//
//    that.get = function(id) {
//      var config = {};
//
//      config.method = 'GET';
//      config.url = baseUrl + '/' + id;
//      return $http(config);
//    };
//    that.save = function(user) {
//      var config = {};
//
//      config.method = user.objectId ? 'PUT' : 'POST';
//      config.url = user.objectId ? baseUrl + '/' + user.objectId : baseUrl;
//      config.data = JSON.stringify(_.omit(user, assignedByParse));
//      return $http(config);
//    };
//    that.query = function() {
//      var config = {};
//
//      config.method = 'GET';
//      config.url = baseUrl;
//      return $http(config);
//    };
//    that.delete = function(id) {
//      var config = {};
//
//      config.method = 'DELETE';
//      config.url = baseUrl + '/' + id;
//      return $http(config);
//    };
//    that.getCurrent = function() {
//      var config = {};
//
//      config.url = parseApiBaseUrl + '/users/me';
//      config.method = 'GET';
//      return $http(config)
//        .then(function(res) {
//          parseSession.user = res.data;
//        })
//        .then(null, function(err) {
//          // something
//          console.log('error');
//        });
//    };
//
//    return that;
//  });