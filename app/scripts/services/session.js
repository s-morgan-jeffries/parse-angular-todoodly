'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('session', function (parseSession) {
    var session = parseSession;

    Object.defineProperty(session, 'todos', {
      enumerable: false,
      configurable: true,
      value: []
    });
    return session;
  });