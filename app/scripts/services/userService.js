angular.module('starter.services', [])

.service('UserService', function ($http, Backand) {

  getUsers = function(data)
  {
    console.log(data);
    var link = 'http://epicsoft.esy.es/customer_feedback.php';
    return $http.get(link).then(function (res){
      console.log(res.data);
      return res.data;
    });
  };

  return{
    getUsers: getUsers
  };
});
