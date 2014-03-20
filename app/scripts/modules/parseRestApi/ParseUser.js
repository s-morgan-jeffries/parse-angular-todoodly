'use strict';

angular.module('parseRestApi')
  .factory('ParseUser', function(parseAbstractObjectFactory, parseConfig, parseSession) {
    var url = parseConfig.restApiBaseUrl + '/:root/:objectId',
      defaults = {root: 'users', objectId: '@objectId'},
      ParseUser = parseAbstractObjectFactory('_User', url, defaults),
      currentUser;

    ParseUser.signUp = function(username, password, email) {
      return currentUser = this.save({
        username: username,
        password: password,
        email: email
      });
    };

    ParseUser.signIn = function(username, password) {
      return currentUser = this.get({root: 'login', username: username, password: password});
    };

    ParseUser.signOut = function() {
      currentUser = null;
    };

    ParseUser.current = function() {
      return currentUser = this.get({objectId: 'me'});
    };

    Object.defineProperty(parseSession, 'user', {
      get: function() {return currentUser;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'sessionToken', {
      get: function() {return currentUser && currentUser.sessionToken;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'userId', {
      get: function() {return currentUser && currentUser.objectId;},
      enumerable: true,
      configurable: false
    });

    Object.defineProperty(parseSession, 'isAuthenticated', {
      get: function() {return !!parseSession.userId;},
      enumerable: true,
      configurable: false
    });

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
