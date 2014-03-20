'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdSiteHeader', function () {
    return {
      templateUrl: 'views/site-header.html',
      restrict: 'E',
      replace: true
    };
  });
