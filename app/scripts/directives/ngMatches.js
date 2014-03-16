'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('ngMatches', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        var matchesValidator = function(value) {
          var matchVal = scope[attrs.ngMatches];
          if (!ctrl.$isEmpty(value) && value !== matchVal) {
            ctrl.$setValidity('matches', false);
            return undefined;
          } else {
            ctrl.$setValidity('matches', true);
            return value;
          }
        };
        ctrl.$parsers.push(matchesValidator);
        ctrl.$formatters.push(matchesValidator);
      }
    };
  });
