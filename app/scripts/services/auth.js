'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('auth', function ($http, User, session, parseConfig) {
    var userId,
      sessionToken,
      auth;

    Object.defineProperty(session, 'sessionToken', {
      get: function() {return sessionToken;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(session, 'userId', {
      get: function() {return userId;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(session, 'isAuthenticated', {
      get: function() {return !!userId;},
      enumerable: true,
      configurable: false
    });

    // Public API here
    auth = {
      signUp: function(user) {
        return User.save(user).
          success(function(data, status, headers, config) {
            sessionToken = data.sessionToken;
            userId = data.objectId;

            // Set ACL here
            user.objectId = userId;
            user.ACL = {};
            user.ACL[userId] = {
              read: true,
              write: true
            };
            return User.save(user);
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
      },
      signIn: function(username, password) {
        var config = {};

        config.url = parseConfig.baseUrl + '/login?username=' + username + '&password=' + password;
        config.method = 'GET';
        return $http(config)
          .success(function(data, status, headers, config) {
            sessionToken = data.sessionToken;
            userId = data.objectId;
          })
          .error(function(data, status, headers, config) {
            // some crap
          });
      },
      signOut: function() {
        userId = sessionToken = null;
      }
    };

    return auth;
  });
