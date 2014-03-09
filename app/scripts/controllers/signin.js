'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SigninCtrl', function ($scope, $location, auth) {
    $scope.signin = function() {
      auth.signIn(this.email, this.password)
        .then(function() {
          $location.path('/todos');
          $location.replace();
        })
        .then(null, function() {});
    };
  });
