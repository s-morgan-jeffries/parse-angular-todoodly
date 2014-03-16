'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('siteFooter', function () {
    return {
      templateUrl: 'views/site-footer.html',
      restrict: 'E',
      replace: true
    };
  });
