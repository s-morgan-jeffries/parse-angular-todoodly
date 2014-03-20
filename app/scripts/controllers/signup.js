'use strict';

//var scope;

angular.module('parseAngularTodoodlyApp')
  .controller('SignupCtrl', function ($scope, $location, User) {

//    scope = $scope;

    $scope.signup = function() {
      User.signUp(this.email, this.password, this.email).$promise
        .then(function() {
          $location.path('/todos');
          $location.replace();
        }, function(res) {
          var errCode = res.data.code;
          switch (errCode) {
            case 202:
              $scope.signupform.email.$setValidity('available', false);
              break;
          }
        });
    };
  });
