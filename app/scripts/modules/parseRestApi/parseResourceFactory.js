'use strict';

angular.module('parseRestApi')
  .factory('parseResourceFactory', function ($resource, parseFunctionUtils) {

    var _ = parseFunctionUtils;

    return function parseResourceFactory(url, defaults, customMethods) {
      var ParseResource;

      customMethods = customMethods || {};

      customMethods.query = {
        method:'GET',
        isArray: true,
        transformResponse: function(data) {
          data = JSON.parse(data).results;
          if (!data) {
            return [];
          }
          return _.map(data, function(item, idx, col) {
            return new ParseResource(item);
          });
        }
      };

      customMethods.create = {
        method:'POST'
      };

      customMethods.update = {
        method:'PUT'
      };

      ParseResource = $resource(url, defaults, customMethods);

      // Have to do something smart here so that:
      // 1) save delegates to separate functions under the hood for creating (using POST) and updating (using PUT), and
      // 2) instance properties are restored after a successful save
      // The first issue is easy to fix. You always get the instance as one of the arguments, so you just check to see if
      // it's new and call the appropriate function accordingly.
      // The second issue is a little trickier. For reasons I don't fully understand yet, when you save an instance to
      // Parse, you wind up losing all of its properties, except for the ones that are returned from the server. That only
      // happens when you call the instance method (so probably related to "this" within angular-resource.js).
      // Key point to remember is that you want this to behave just like $resource's built-in save function.
      ParseResource.save = (function() {
        var create = ParseResource.create,
          update = ParseResource.update,
          blacklistProps = ['createdAt', 'updatedAt', 'sessionToken', 'emailVerified'];

        delete ParseResource.create;
        delete ParseResource.update;
        delete ParseResource.prototype.$create;
        delete ParseResource.prototype.$update;

        var isInstance = function(obj, idx, col) {
          return obj instanceof ParseResource;
        };

        var isParams = function(obj, idx, col) {
          return (typeof obj === 'object') && !isInstance(obj);
        };

        return function() {
          var args,
            params,
            instance,
            originalInstanceProps,
            updatedInstanceProps,
            errorFunc,
            successFunc,
            wrappedSuccessFunc,
            wrappedErrorFunc,
            saveFunc;

          args = Array.prototype.slice.call(arguments, 0);
          // Get the parameters we're saving (or an empty object)
          params = _.find(args, isParams) || {};
          params = _.omit(params, blacklistProps);

          // Figure out which argument is the object to be updated or make a new one
          instance = _.find(args, isInstance) || new ParseResource(params);
          // This is all the the own properties that aren't methods
          originalInstanceProps = _.omit(_.pick(instance, _.keys(instance)), _.methods(instance));
          // Those props updated with params
          updatedInstanceProps = _.extend(originalInstanceProps, params);
          // If there's an error, this gets invoked, and the shallowClearAndCopy thing never happens
          errorFunc = _.findLast(args, angular.isFunction) || angular.noop;
          // Conversely, this gets invoked after the shallowClearAndCopy. So you could use this to merge the data.
          successFunc = _.find(args, angular.isFunction) || angular.noop;
          // This merges the instance props back into the instance
          wrappedSuccessFunc = function(val, responseHeaders) {
            _.defaults(val, updatedInstanceProps);
            successFunc(val, responseHeaders);
          };
          // Delegate to the correct function depending on whether this is a creation or update
          saveFunc = instance.isNew() ? create : update;

          // If the error function is the same as the save function, set errorFunc to angular.noop
          errorFunc = errorFunc === successFunc ? angular.noop : errorFunc;
          // In case there's a problem, this basically resets the instance
          wrappedErrorFunc = function(response) {
            _.extend(instance, originalInstanceProps);
            errorFunc(response);
          };

          // Remove blacklist properties from the instance
          angular.forEach(blacklistProps, function(propName) {
            delete instance[propName];
          });

          // Delegate to the original function...
          return saveFunc.call(this, params, instance, wrappedSuccessFunc, wrappedErrorFunc);
        };
      }());

      return ParseResource;

    };

  });