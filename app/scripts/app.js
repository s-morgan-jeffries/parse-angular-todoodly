'use strict';

angular.module('parseAngularTodoodlyApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'parseRestApi'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        resolve: {
          auth: function($q, session, auth) {
            return auth(false, '/todos', true);
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          auth: function($q, session, auth) {
            return auth(false, '/todos', true);
          }
        }
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        resolve: {
          auth: function($q, session, auth) {
            return auth(false, '/todos', true);
          }
        }
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl',
        resolve: {
          auth: function($q, session, auth) {
            return auth(true, '/home', false);
          }
        }
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('parseRestApiInterceptor');
  })
  .run(function($rootScope, $location){
    //If the route change failed due to authentication error, redirect them out
    $rootScope.$on('$routeChangeError', function(err, current, previous, rejection){
      if(rejection && rejection.redirectPath) {
        $location.path(rejection.redirectPath);
      } else if (rejection && rejection.replacePath) {
        $location.path(rejection.replacePath);
        $location.replace();
      }
    })
  });