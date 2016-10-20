'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state) {

    $scope.$state = $state;
    function getUsers () {
    userService.getUsers('user/').then(function (result) {
      $scope.users = result.data.data;
      $scope.userLength=$scope.users.length;
        });
     }
  });
