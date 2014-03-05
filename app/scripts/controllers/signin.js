'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SigninCtrl', function ($scope, $location, auth) {
    $scope.signin = function() {
//      console.log('signin!');
//      console.log(this.email);
//      console.log(this.password);
      auth.signIn(this.email, this.password).success(function() {
        $location.path('/home');
        $location.replace();
      }).error(function() {});
    };
  });
