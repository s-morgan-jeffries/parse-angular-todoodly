'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdGiveFocus', function ($timeout) {
    return function (scope, elem, attrs) {
      scope.$watch(attrs.ngGiveFocus, function (newVal) {
        if (newVal) {
          $timeout(function () {
            elem[0].focus();
          }, 0, false);
        }
      });
    };
  });