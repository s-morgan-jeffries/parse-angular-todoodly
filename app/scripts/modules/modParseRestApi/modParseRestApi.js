'use strict';

angular.module('modParseRestApi', [
  'parseRestApi'
])
  .run(function(parseConfig) {

  })
  .run(function(parseResourceFactory) {

  })
  .run(function(parseAbstractObjectFactory) {

  })
  .run(function(parseObjectFactory) {

  })
  .run(function(ParseUser) {
    ParseUser.signIn = (function() {
      var signIn = ParseUser.signIn;

    }());
//    ParseUser.signIn = function(username, password) {
//      var user = this.get({root: 'login', username: username, password: password});
//      user.$promise.then(function() {
//        parseSession.sessionToken = user.sessionToken;
//        delete user.sessionToken;
//      });
//      return parseSession.user = user;
//    };
//    To do what the JS SDK does, only POST,
//      set body to JSON object with original method as _method;
//    add ApplicationId and JavaScriptKey from settings;
//    set _SessionToken if you need it for the request;
//    set Content-Type request header to text/plain and set no other request headers.
//      This is silly though -- the REST API should just work as documented.
  })
  .run(function(parseRole) {

  })
  .run(function(parseFile) {

  })
  .run(function(parseCloudFunction) {

  })
  .run(function(parseInitialize) {

  })
  .run(function() {});