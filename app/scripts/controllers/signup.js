'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('SignupCtrl', function ($scope, $location, auth) {
    $scope.signup = function() {
//      console.log('signup!');
//      console.log(this.email);
//      console.log(this.password);
//      console.log(this.passwordConfirmation);
      var user = {
        username: this.email,
        password: this.password,
        email: this.email
      };

      if (this.passwordConfirmation !== this.password) {
        // do something
      }
      auth.signUp(user).success(function() {
        $location.path('/todos');
        $location.replace();
      }).error(function() {});
    };
  });
