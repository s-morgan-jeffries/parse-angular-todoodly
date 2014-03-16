'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('siteHeader', function () {
    return {
      templateUrl: 'views/site-header.html',
      restrict: 'E',
      replace: true
    };
  });
