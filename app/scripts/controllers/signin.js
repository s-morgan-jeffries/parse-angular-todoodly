'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SigninCtrl', function ($scope) {
    $scope.signin = function() {
      console.log('signin!');
      console.log(this.email);
      console.log(this.password);
    };
  });
