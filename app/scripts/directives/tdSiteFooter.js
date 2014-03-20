'use strict';

angular.module('parseAngularTodoodlyApp')
  .directive('tdSiteFooter', function () {
    return {
      templateUrl: 'views/site-footer.html',
      restrict: 'E',
      replace: true
    };
  });
