'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('helloCloud', function (parseFunctionFactory) {

    var helloCloud = parseFunctionFactory('hello', {});

//    var hello = function() {
//      return helloCloud.cloudCall({});
//    };
//
//    return hello;
    return helloCloud;
  });
