'use strict';

angular.module('parseAngularTodoodlyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'parseRestApi'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('parseRestApiInterceptor');
    $httpProvider.interceptors.push('parseSessionInterceptor');
  });