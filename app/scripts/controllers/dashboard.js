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
        });
        $scope.userLength=$scope.users.length;
     }
     getUser();

     $scope.displayUsers = function(){
       $state.go('users');
     };
  })
  .controller('ReportsCtrl', function($scope, $state) {

    //Doughnut Chart
    $scope.dlabels = ["Budget : >1000", "Budget : 2000-5000", "Budget : 5000-10000", 'Budget : >10000'];
    $scope.ddata = [300, 400, 100, 300];

    //Bar Chart
    $scope.barlabels = ['Jan', 'Feb', 'Mar', 'Apr', 'June', 'July', 'Aug'];
    $scope.barseries = ['Male', 'Female'];
    $scope.bardata = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    //Store Ambience Pie Chart
    $scope.salabels = ["1 Star", "2 Star", "3 Star", '4 Star', '5 Star'];
    $scope.sadata = [300, 500, 100, 120, 400];

    //Store Quality Pie Chart
    $scope.sqlabels = ["1 Star", "2 Star", "3 Star", '4 Star', '5 Star'];;
    $scope.sqdata = [140, 100, 250, 120, 160];

    //Range of Products Pie Chart
    $scope.rplabels = ["1 Star", "2 Star", "3 Star", '4 Star', '5 Star'];;
    $scope.rpdata = [300, 500, 100, 120, 400];

    //Service Quality Pie Chart
    $scope.qslabels = ["1 Star", "2 Star", "3 Star", '4 Star', '5 Star'];;
    $scope.qsdata = [140, 100, 250, 120, 160];
});
