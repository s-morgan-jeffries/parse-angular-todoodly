'use strict';

angular.module('parseRestApi')
  .factory('ParseUser', function($window, parseAbstractObjectFactory, parseConfig, parseSession) {
    var url = parseConfig.restApiBaseUrl + '/:root/:objectId',
      defaults = {root: 'users', objectId: '@objectId'},
      ParseUser = parseAbstractObjectFactory('_User', url, defaults);

    (function() {
      var currentUser;

      Object.defineProperty(parseSession, 'user', {
        enumerable: true,
        configurable: false,
        get: function() {
          return currentUser || (currentUser = new ParseUser(JSON.parse($window.sessionStorage.getItem('user'))));
        },
        set: function(val) {
          currentUser = val;
          val.$promise.then(function() {
            $window.sessionStorage.setItem('user', JSON.stringify(val));
          });
        }
      });
    }());

//    parseSession.addProps('user');

    Object.defineProperty(parseSession, 'sessionToken', {
      get: function() {return this.user && this.user.sessionToken;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'userId', {
      get: function() {return this.user && this.user.objectId;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'isAuthenticated', {
      get: function() {return !!this.userId;},
      enumerable: true,
      configurable: false
    });

    ParseUser.signUp = function(username, password, email) {
      return parseSession.user = this.save({
        username: username,
        password: password,
        email: email
      });
    };

    ParseUser.signIn = function(username, password) {
      return parseSession.user = this.get({root: 'login', username: username, password: password});
    };

    ParseUser.signOut = function() {
      parseSession.user = null;
    };

    ParseUser.current = function() {
      return parseSession.user = this.get({objectId: 'me'});
    };

    return ParseUser;
  });



//URL	HTTP Verb	Functionality
//  /1/users	POST	Signing Up
//Linking Users
//  /1/login	GET	Logging In
//  /1/users/<objectId>	GET	Retrieving Users
///1/users/me	GET	Validating Session Tokens
//Retrieving Current User
///1/users/<objectId>	PUT	Updating Users
//  Linking Users
//  Verifying Emails
//  /1/users	GET	Querying Users
//  /1/users/<objectId>	DELETE	Deleting Users
//    /1/requestPasswordReset	POST	Requesting A Password Reset
