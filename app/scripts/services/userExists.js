'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('userExists', function (parseFunctionFactory) {
    var userExists = parseFunctionFactory('userExists', {});

    return function(username) {
      return userExists({username: username});
    };
  });