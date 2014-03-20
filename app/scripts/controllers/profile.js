'use strict';

//var scope;

angular.module('parseAngularTodoodlyApp')
  .controller('ProfileCtrl', function ($scope, $modal, $location, session) {

//    scope = $scope;

    $scope.username = session.user.username;

    $scope.confirmDelete = function() {

      var modalInstance = $modal.open({
        templateUrl: 'views/delete-user.html',
        controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
          $scope.deleteUser = function () {
            $modalInstance.close();
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        }]
      });

      modalInstance.result
        .then(function () {
          var user = session.user,
            User = user.constructor;

          user.$delete()
            .then(function() {
              User.signOut();
              $location.path('/home');
              $location.replace();
            });
        }, function () {});
    };
  });
