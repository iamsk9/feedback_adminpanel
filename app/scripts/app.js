'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'chart.js',
    'starter.services'
  ])
  .config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          parent: 'base',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('users', {
           url: '/users',
           parent: 'dashboard',
           templateUrl: 'views/dashboard/users.html',
           controller: 'DashboardCtrl'
       })
         .state('addUser', {
              url: '/addUser',
              parent: 'dashboard',
              templateUrl: 'views/dashboard/addUser.html',
              controller: 'DashboardCtrl'
            })
          .state('overview', {
            url: '/overview',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/overview.html'
          })
          .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'views/dashboard/reports.html',
            controller: 'ReportsCtrl'
          });

  });
