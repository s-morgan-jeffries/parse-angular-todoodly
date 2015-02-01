'use strict';

//var scope;
//var p;

angular.module('parseAngularTodoodlyApp')
  .controller('ProfileCtrl', function ($scope, $modal, $location, session) {

//    scope = $scope;

    var savingUser = false;

    $scope.user = session.user;

    $scope.editUser = function(propName) {
      this.editedProp = propName;
      this.origPropVal = this.user[propName];
    };

    $scope.doneEditing = function() {
      var propName = this.editedProp,
        origPropVal = this.origPropVal,
        promise,
        self = this;

      if (savingUser) {
        return;
      }
      this.origPropVal = this.editedProp = null;
      if ((this.user[propName] !== origPropVal)) {
        savingUser = true;
        promise = this.user.$save();
        promise.then(null, function() {
          var errData = arguments[0].data;
          console.log(errData);
          session.refreshUser().$promise.then(function() {
            $scope.user = session.user;
          });
        });
        promise.finally(function() {
          savingUser = false;
        });
      }
    };

    $scope.revertEditing = function() {
      console.log('revertEditing');
      this.user[this.editedProp] = this.origPropVal;
      this.origPropVal = this.editedProp = null;
    };

    $scope.uploadPhoto = function() {

      var modalInstance = $modal.open({
        templateUrl: 'views/upload-photo.html',
        controller: ['$scope', '$modalInstance', '$upload', function ($scope, $modalInstance, $upload) {

//          scope = $scope;

          $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
              var file = $files[i];
              console.log(file);
              $scope.upload = $upload.upload({
                url: 'https://api.parse.com/1/files/' + file.name, //upload.php script, node.js route, or servlet url
                // method: POST or PUT,
                // headers: {'headerKey': 'headerValue'},
                // withCredentials: true,
//                data: {myObj: $scope.myModelObj},
                file: file
                // file: $files, //upload multiple files, this feature only works in HTML5 FromData browsers
                /* set file formData name for 'Content-Desposition' header. Default: 'file' */
                //fileFormDataName: myFile, //OR for HTML5 multiple upload only a list: ['name1', 'name2', ...]
                /* customize how data is added to formData. See #40#issuecomment-28612000 for example */
                //formDataAppender: function(formData, key, val){} //#40#issuecomment-28612000
              }).progress(function(evt) {
                  console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function(data, status, headers, config) {
                  // file is uploaded successfully
                  console.log(data);
                });
              //.error(...)
              //.then(success, error, progress);
            }
            // $scope.upload = $upload.upload({...}) alternative way of uploading, sends the the file content directly with the same content-type of the file. Could be used to upload files to CouchDB, imgur, etc... for HTML5 FileReader browsers.
          };

          $scope.upload = function () {
            console.log(this.file);
            $modalInstance.close();
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        }]
      });

//      modalInstance.result
//        .then(function () {
//          var user = session.user,
//            User = user.constructor;
//
//          user.$delete()
//            .then(function() {
//              User.signOut();
//              $location.path('/home');
//              $location.replace();
//            });
//        }, function () {});
    };

    $scope.confirmDelete = function() {

      var modalInstance = $modal.open({
        templateUrl: 'views/delete-user.html',
        controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {
          $scope.deleteUser = function () {
            $modalInstance.close();
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        }]
      });

      modalInstance.result
        .then(function () {
          var user = session.user,
            User = user.constructor;

          user.$delete()
            .then(function() {
              User.signOut();
              $location.path('/home');
              $location.replace();
            });
        }, function () {});
    };
  });
