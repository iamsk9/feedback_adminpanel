'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {
        if($scope.logdata.user=='admin' && $scope.logdata.password=='admin')
         {
           $location.path('/dashboard');
           return false;
         }
         else if($scope.logdata.user==' ' && $scope.logdata.password==' ')
         {
           $scope.message="please enter username or password";
         }
         else {
           $scope.message="Incorrect username or password";
         }
   }

  });
