'use strict';

angular.module('parseRestApi')
  .factory('parseSession', function ($sessionStorage) {
    var parseSession = $sessionStorage;

//    parseSession.addProps = function() {
//      var args = Array.prototype.slice.call(arguments, 0),
//        self = this;
//
//      angular.forEach(args, function(propName) {
//        var propVal,
//          constructor;
//
//        Object.defineProperty(self, propName, {
//          enumerable: true,
//          configurable: true,
//          get: function() {
//            return propVal || (function() {
//              propVal  = JSON.parse($window.sessionStorage.getItem(propName));
//              if (constructor) {
//                propVal = new constructor(propVal);
//              }
//              return propVal;
//            }());
////              (propVal = JSON.parse($window.sessionStorage.getItem(propName)));
//          },
//          set: function(val) {
//            propVal = val;
//            if (val && val.constructor) {
//              constructor = val.constructor;
//            } else {
//              constructor = null;
//            }
//            if (val && val.$promise) {
//              val.$promise.then(function() {
//                $window.sessionStorage.setItem(propName, JSON.stringify(val));
//              });
//            } else {
//              $window.sessionStorage.setItem(propName, JSON.stringify(val));
//            }
//          }
//        });
//      });
//    };

    return parseSession;
  });