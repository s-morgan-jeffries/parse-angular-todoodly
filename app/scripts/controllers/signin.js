'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SigninCtrl', function ($scope, $location, User) {
    $scope.signin = function() {
      User.signIn(this.email, this.password).$promise
        .then(function() {
          $location.path('/todos');
          $location.replace();
        }, function(res) {
          var errCode = res.data.code;
          switch (errCode) {
            case 101:
              $scope.signinform.email.$setValidity('registered', false);
              $scope.signinform.password.$setValidity('registered', false);
              break;
          }
        });
    };
  });
