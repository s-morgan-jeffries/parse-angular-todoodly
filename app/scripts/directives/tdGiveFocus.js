'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdGiveFocus', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        scope.$watch(attrs.tdGiveFocus, function (newVal) {
          if (newVal) {
            $timeout(function () {
              elem[0].focus();
            }, 0, false);
          }
        });
      }
    }
  });