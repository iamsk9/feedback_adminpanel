'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl', function($scope, $state,$http,UserService) {
    $scope.$state = $state;
    $scope.users={};
    function getUser() {
    UserService.getUsers('user/').then(function (result) {
      console.log(result['details'][0]);
      for(var i=0;i<result['details'].length;i++)
        $scope.users[i] = result['details'][i];
      //$scope.userLength=$scope.users.length;
        });
     }
   getUser();

   $scope.displayUsers = function(){
     $state.go('users');
   };

  });
