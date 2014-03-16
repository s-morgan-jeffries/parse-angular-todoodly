'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('auth', function ($q, session) {
    return function(authenticationStatus, redirectPath, replaceCurrent) {
      var redirectObj = {},
        redirectProp = replaceCurrent ? 'replacePath' : 'redirectPath';
      redirectObj[redirectProp] = redirectPath;
//      console.log(redirectObj);
//      console.log('session.isAuthenticated:');
//      console.log(session.isAuthenticated);
//      console.log('authenticationStatus');
//      console.log(authenticationStatus);
      if (!!session.isAuthenticated === authenticationStatus) {
        return true;
      }
      return $q.reject(redirectObj);
    };
  });
