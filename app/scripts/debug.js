'use strict';

var $injector,
  $scope;

setTimeout(function() {
  var el = angular.element(document.body);
  $injector = el.injector();
  $scope = el.scope();
}, 2000);
