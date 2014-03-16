'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SigninCtrl', function ($scope, $location, User) {
    $scope.signin = function() {
      User.signIn(this.email, this.password).$promise
        .then(function() {
          $location.path('/todos');
          $location.replace();
        });
    };
  });
