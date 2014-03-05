'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SiteHeaderCtrl', function ($scope, auth, session) {
    $scope.isAuthenticated = function() {
      return session.isAuthenticated;
    };

    $scope.signOut = function() {
      auth.signOut();
    };
  });
