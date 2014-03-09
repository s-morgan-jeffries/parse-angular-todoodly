'use strict';

angular.module('parseRestApi')
  .factory('parseAbstractObjectFactory', function (parseResourceFactory) {
    return function parseAbstractObjectFactory(className, url, defaults, customMethods) {
      var ParseAbstractObject = parseResourceFactory(url, defaults, customMethods);

      ParseAbstractObject.prototype.isNew = function() {
        return !this.objectId;
      };

      ParseAbstractObject.prototype.getPointer = function() {
        return {
          __type: 'Pointer',
          className: className,
          objectId: this.objectId
        };
      };

      ParseAbstractObject.prototype.setUserPriveleges = function(user, canRead, canWrite) {
        this.ACL = this.ACL || {};
        this.ACL[user.objectId] = {
          read: canRead,
          write: canWrite
        };
      };

      return ParseAbstractObject;

    };

//    return parseAbstractObjectFactory;
  });
