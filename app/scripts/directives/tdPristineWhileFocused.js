'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdPristineWhileFocused', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {

        var setPristine = function(value) {
          ctrl.$setPristine();
          return value;
        };

        var setDirty = function() {
          scope.$apply(function() {
            ctrl.$dirty = true;
            ctrl.$pristine = false;
          });
        };

        elem.on('focus', setPristine);
        ctrl.$parsers.push(setPristine);
        elem.on('change', setDirty);
      }
    };
  });
