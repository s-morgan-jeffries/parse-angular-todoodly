'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SignupCtrl', function ($scope) {
    $scope.signup = function() {
      console.log('signup!');
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordConfirmation);
    };
  });
