'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('ngValidOnUpdate', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        var setValid = function(value) {
          var validatorsToSet = attrs.ngValidOnUpdate.split(' ');
          angular.forEach(validatorsToSet, function(validator) {
            ctrl.$setValidity(validator, true);
          });
          return value;
        };
        ctrl.$parsers.push(setValid);
        ctrl.$formatters.push(setValid);
      }
    };
  });
