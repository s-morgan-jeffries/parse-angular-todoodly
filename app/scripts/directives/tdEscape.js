'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdEscape', function () {
    var ESCAPE_KEY = 27;

    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.bind('keydown', function (event) {
          if (event.keyCode === ESCAPE_KEY) {
            scope.$apply(attrs.tdEscape);
          }
        });
      }
    }
  });