'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdEnter', function () {
    var ENTER_KEY = 13;

    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.bind('keydown', function (event) {
//          console.log(event.keyCode);
          if (event.keyCode === ENTER_KEY) {
            scope.$apply(attrs.tdEnter);
          }
        });
      }
    }
  });