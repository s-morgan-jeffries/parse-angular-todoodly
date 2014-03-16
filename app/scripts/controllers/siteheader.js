'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SiteHeaderCtrl', function ($scope, $location, User, session) {
    $scope.isAuthenticated = function() {
      return session.isAuthenticated;
    };

    $scope.signOut = function() {
      User.signOut();
      $location.path('/home');
      $location.replace();
    };
  });
