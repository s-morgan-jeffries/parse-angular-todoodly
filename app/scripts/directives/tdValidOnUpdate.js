'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdValidOnUpdate', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {


        var setValid = function(value) {

          var validatorsToSet = attrs.tdValidOnUpdate.split(' ');
          angular.forEach(validatorsToSet, function(validatorStr) {
            var validatorParts = validatorStr.split('.'),
              validator,
              inputCtrl;

            if (validatorParts.length === 1) {
              inputCtrl = ctrl;
              validator = validatorParts[0];
            } else {
              validator = validatorParts.pop();
              inputCtrl = scope;
              angular.forEach(validatorParts, function(propStr) {
                inputCtrl = inputCtrl[propStr];
              });
            }
            inputCtrl.$setValidity(validator, true);
          });
          return value;
        };
        ctrl.$parsers.push(setValid);
        ctrl.$formatters.push(setValid);
      }
    };
  });
