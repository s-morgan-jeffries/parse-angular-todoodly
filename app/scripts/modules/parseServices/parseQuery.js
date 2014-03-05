'use strict';

angular.module('ParseServices')
  .factory('ParseQuery', ['$q', '$rootScope', function ($q, $rootScope){
    return function(query, options){
      var defer = $q.defer();

      //default function call to find
      var functionToCall = 'find';
      if(options != undefined && options.functionToCall != undefined)
        functionToCall = options.functionToCall;

      console.log(functionToCall, query);

      //wrap defer resolve/reject in $apply so angular updates watch listeners
      var defaultParams = [{
        success: function(data){
          $rootScope.$apply(function(){
            defer.resolve(data);
          });
        },
        error: function(data, error){
          console.log('error:', error);
          $rootScope.$apply(function(){
            defer.reject(error);
          });
        }
      }];

      //check for additional parameters to add
      if(options && options.params)
        defaultParams = options.params.concat(defaultParams);


      query[functionToCall].apply(query, defaultParams);

      return defer.promise;
    }
  }]);