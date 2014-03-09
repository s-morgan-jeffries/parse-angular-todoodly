'use strict';

angular.module('parseRestApi')
  .factory('parseAuth', function ($http, ParseUser, parseSession, parseApiBaseUrl) {
    var userId,
      sessionToken,
      auth,
      user;

    Object.defineProperty(parseSession, 'sessionToken', {
      get: function() {return sessionToken;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'userId', {
      get: function() {return userId;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'isAuthenticated', {
      get: function() {return !!userId;},
      enumerable: true,
      configurable: false
    });

    var getCurrentUser = function() {
      var config = {};

      config.url = parseApiBaseUrl + '/users/me';
      config.method = 'GET';
      return $http(config)
        .then(function(res) {
          parseSession.user = res.data;
        })
        .then(null, function(err) {
          // something
          console.log('error');
        });
    };

    // Public API here
    auth = {
      signUp: function(user) {
        return ParseUser.save(user)
          .then(function(data, status, headers, config) {
            sessionToken = data.sessionToken;
            userId = data.objectId;

            // Set ACL here
            user.objectId = userId;
            user.ACL = {};
            user.ACL[userId] = {
              read: true,
              write: true
            };
            return ParseUser.save(user);
          })
          .then(getCurrentUser)
          .then(null, function(err) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
      },
      signIn: function(username, password) {
        var config = {};

        config.url = parseApiBaseUrl + '/login?username=' + username + '&password=' + password;
        config.method = 'GET';
        return $http(config)
          .then(function(res) {
            parseSession.user = res.data;
            userId = res.data.objectId;
            sessionToken = res.data.sessionToken;
          })
          .then(null, function(err) {
            // some crap
          });
      },
      signOut: function() {
        parseSession.user = userId = sessionToken = null;
      }
    };

    return auth;
  });
