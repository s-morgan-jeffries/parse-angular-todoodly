'use strict';

angular.module('parseRestApi')
  .factory('ParseUser', function(parseAbstractObjectFactory, parseConfig, parseSession) {
    var url = parseConfig.restApiBaseUrl + '/:root/:objectId',
      defaults = {root: 'users', objectId: '@objectId'},
      ParseUser = parseAbstractObjectFactory('_User', url, defaults);

    // parseSession.user is a ParseUser instance. This function only runs once, at startup. At that point,
    // parseSession.user will be restored from the sessionStore if it exists. If it doesn't, it will be undefined. If
    // it's been explicitly set to null, the first expression will evaluate to falsey, so it will stay null. If it
    // exists and is an object, it will be instantiated as a new ParseUser. The reason for this is that
    // serializing-deserializing removes methods, so we have to re-instantiate it in order to use it.
    parseSession.user = parseSession.user && new ParseUser(parseSession.user);

    // If there's no user, explicitly delete the session token
    if (!parseSession.user) {
      parseSession.sessionToken = null;
    }

    Object.defineProperty(parseSession, 'userId', {
      get: function() {return this.user && this.user.objectId;},
      enumerable: false,
      configurable: false
    });

    Object.defineProperty(parseSession, 'isAuthenticated', {
      get: function() {return !!this.sessionToken;},
      enumerable: false,
      configurable: false
    });

    ParseUser.signUp = function(username, password, email) {
      var user = this.save({
        username: username,
        password: password,
        email: email
      });
      user.$promise.then(function() {
        parseSession.sessionToken = user.sessionToken;
        delete user.sessionToken;
      });
      return parseSession.user = user;
    };

    ParseUser.signIn = function(username, password) {
      var user = this.get({root: 'login', username: username, password: password});
      user.$promise.then(function() {
        parseSession.sessionToken = user.sessionToken;
        delete user.sessionToken;
      });
      return parseSession.user = user;
    };

    ParseUser.signOut = function() {
      parseSession.sessionToken = parseSession.user = null;
    };

    ParseUser.current = function() {
      var user = this.get({objectId: 'me'});
      user.$promise.then(function() {
        parseSession.sessionToken = user.sessionToken;
        delete user.sessionToken;
      });
      return parseSession.user = user;
    };

    Object.defineProperty(parseSession, 'refreshUser', {
      enumerable: false,
      configurable: false,
      value: function() {
        return ParseUser.current();
      }
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
